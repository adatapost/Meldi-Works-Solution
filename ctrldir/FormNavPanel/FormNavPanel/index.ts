import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class FormNavPanel implements ComponentFramework.StandardControl<IInputs, IOutputs> {


	private context: ComponentFramework.Context<IInputs>;
	private notifyOutputChanged: () => void;
	private container: HTMLDivElement;
	private name: string | null;
	private jsonListString: string | null;
	private buttonClickHandler: EventListener;
	private jsonList: Array<any> = [];

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(
		context: ComponentFramework.Context<IInputs>, 
		notifyOutputChanged: () => void, 
		state: ComponentFramework.Dictionary, 
		container:HTMLDivElement): void
	{

		this.context = context;
		this.notifyOutputChanged = notifyOutputChanged;
		this.container = container;
		this.name = this.context.parameters.Name.raw;
		this.jsonListString = this.context.parameters.JsonList.raw;
		this.jsonList = JSON.parse(this.jsonListString ?? "");
		this.buttonClickHandler = this.buttonClick.bind(this);

		console.dir(this.jsonList);
		const currentObj = this.jsonList.filter( (v,i) => v.Active )[0];
		currentObj.guid = this.getGuid();
		console.dir(currentObj);
		const span = document.createElement("span");

		this.jsonList.forEach( (v,i) => {
			const button = document.createElement("button");
			button.innerHTML = v.Label;
			button.setAttribute("style","paddng: 5px;margin: 3px");
			button.value = i.toString();
			button.addEventListener('click', this.buttonClickHandler);
			span.appendChild(button);
		});

		this.container.appendChild(span);
		
	}

	public buttonClick(event: any) {
		const index = parseInt(event.srcElement.value);
		const obj = this.jsonList[index];
		console.log(index);
		console.dir(obj);

	}

	public getGuid() {
		const url = window.location.href;

		//get the part after question mark with parameters list
		const parametersString = url.split("?")[1]; 
	
		let parametersObj:any = {};
	
		if(parametersString){
			// split string to pair parameter=value
			for(let paramPairStr of parametersString.split("&")){
				let paramPair = paramPairStr.split("=");
				parametersObj[paramPair[0]] = paramPair[1];
			}
		}
		console.log(parametersObj);
		return parametersObj["id"];
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}

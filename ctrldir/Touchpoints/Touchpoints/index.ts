import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class Touchpoints implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private context: ComponentFramework.Context<IInputs>;
	private notifyOutputChanged: () => void;
	private container: HTMLDivElement;
	private labels: string | null;
	private forms: string | null;
	private entities: string | null;
	private guid: string | null;
	private refentities: string | null;
	private buttonClickHandler: EventListener;
	
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
		this.labels = this.context.parameters.Labels.raw;
		this.forms = this.context.parameters.Forms.raw;
		this.guid = this.getGuid();
		this.entities = this.context.parameters.Entities.raw;
		this.refentities = this.context.parameters.RefEntities.raw;
		this.buttonClickHandler = this.buttonClick.bind(this);
		
		console.dir(this.context);
		const lablesArray = this.labels?.split(";");
		

		const span = document.createElement("span");

		lablesArray?.forEach( (v,i)=> {
			const button = document.createElement("button");
			
			button.innerHTML = v;
			button.value=i.toString();
			button.addEventListener("click",this.buttonClickHandler);
			span.appendChild(button);
		});
		container.appendChild(span);
	}

	public buttonClick(event: any) {
	   const formsArray = this.forms?.split(";");
	   const entitiesArray = this.entities?.split(";");
	   const ctx = this.context;
	   
	   const index = event.srcElement.value;
	   if(formsArray && entitiesArray) {
		   
		const formId = formsArray[index];
		const entityName = entitiesArray[index];
		
		var entityFormOptions1: any  = {};
		entityFormOptions1["entityName"] = entityName;
		entityFormOptions1["formId"] = formId;
		entityFormOptions1["entityId"] = this.guid;
		
		if(this.refentities?.includes(entityName)) {
			console.log("Begin search");
			let entityId = `${entityName}id`;
			var qs = `?$select=${entityId}&$filter=_meldi_project_value eq ${this.guid}`;
			this.context.webAPI.retrieveMultipleRecords(entityName,qs)
			.then(function (results) {		
				 console.log(results?.entities);
				 let tempGuid = results?.entities[0][entityId];
				 console.log(tempGuid);
			 
				entityFormOptions1["entityName"] = entityName;
				entityFormOptions1["formId"] = formId;
				entityFormOptions1["entityId"] = tempGuid;
				
				// Open the form.
				ctx.navigation.openForm(entityFormOptions1).then(
					function (success) {
						console.log(success);
					},
					function (error) {
						console.log(error);
				});
			});		
		} else {
					// Open the form.
					ctx.navigation.openForm(entityFormOptions1).then(
						function (success) {
							console.log(success);
						},
						function (error) {
							console.log(error);
			});

		}

	   }
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

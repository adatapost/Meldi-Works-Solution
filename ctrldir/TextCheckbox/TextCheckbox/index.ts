import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class TextCheckbox implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private context: ComponentFramework.Context<IInputs>;
	private notifyOutputChanged: () => void;
	private container: HTMLDivElement;
	private value: string | null;
	private checkedValue: string | null;
	private uncheckedValue: string | null;
	private checkboxCheckHandler: EventListener;
	private checkStatus: boolean;

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
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
	{
		this.context = context;
		this.notifyOutputChanged = notifyOutputChanged;
		this.container = container;
		this.checkboxCheckHandler = this.checkboxCheck.bind(this);
		this.checkedValue = this.context.parameters.CheckedValue.raw;
		this.uncheckedValue = this.context.parameters.UncheckedValue.raw;
		this.checkStatus = false;

		const checkbox = document.createElement("input");
		const span = document.createElement("span");
		const label = document.createElement("label");

		label.innerHTML = this.context.parameters.Label.raw ?? "";
		 
		if(checkbox) {
			checkbox.type = "checkbox";
			checkbox.addEventListener("change",this.checkboxCheckHandler);
			
			if(this.context.parameters.Value.raw) {
		 	    checkbox.checked = "Yes true yes 1 True".includes(this.context.parameters.Value.raw ?? "");
			    this.checkStatus = checkbox.checked;
			}
		}
		if(this.context.parameters.Left.raw == "Left") {
			span.appendChild(checkbox);
			span.appendChild(label);
		} else {
			span.appendChild(label);
			span.appendChild(checkbox);
		}
		this.container.appendChild(span);
		this.notifyOutputChanged();	 
	}

	public checkboxCheck() {
		const checkbox = this.container.querySelector('input');
		if(checkbox) {
			this.checkStatus = checkbox.checked;		
			this.notifyOutputChanged();	 
		}
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		const checkbox = this.container.querySelector('input');
		const label = this.container.querySelector('label');
		if(label) {
			label.innerHTML = this.context.parameters.Label.raw ?? "";
		}
		
		if(checkbox) {

			if(this.context.parameters.Value.raw) {
			 checkbox.checked = "Yes true yes 1 True".includes(this.context.parameters.Value.raw ?? "");		
			 this.checkStatus = checkbox.checked;	 
			}
		}
		console.log('updateView method');
	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		console.log('getOutput method');
		return {
			Value: (this.checkStatus ? this.context.parameters.CheckedValue.raw : this.context.parameters.UncheckedValue.raw) ?? ""  
		};
	}

	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		console.log('destroy method');
		this.container.querySelector("input")!.removeEventListener("change", this.checkboxCheckHandler);
	}
}

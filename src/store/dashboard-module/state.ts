
export enum EViewOptions {
  WELCOME = 'WELCOME',
  DASHBOARD = 'DASHBOARD'
}

export enum EDashboardTabOptions {
  DESIGN_MODAL = 'DESIGN_MODAL',
  SIMULATE_MODEL = 'SIMULATE_MODEL',
  SIMULATE_CIRCUITS = 'SIMULATE_CIRCUITS',
}

export enum EDesignModelStep {
  READOUT_PARAMETERS = 'READOUT_PARAMETERS',
  INITIALIZATION_PARAMETERS = 'INITIALIZATION_PARAMETERS',
  BATH_TYPE = 'BATH_TYPE',
  BATH_PARAMETERS = 'BATH_PARAMETERS',
  SYSTEM_BATH_COUPLING = 'SYSTEM_BATH_COUPLING'
}

export enum ESimulateModelStep {
  GATE_TYPES = 'GATE_TYPES',
  GATE_PULSE = 'GATE_PULSE',
  SIMULATE = 'SIMULATE'
}

export interface IConstant {
  id: number
}

export interface IQudit {
  frequency: number, // 5.17
  variation: number, // 0.02Ghz,
  anharmonicity: number // 0.12 Ghz
}

export interface ICoupling {
  controlKnob: boolean,
  frequency: number,
  variation: number,
  constants: IConstant[]
}

export interface IDashboardState {
  appView: EViewOptions,
  lastAppView: EViewOptions,
  dashboardTab: EDashboardTabOptions,
  designModelStep: EDesignModelStep | null,
  simulateModelStep: ESimulateModelStep | null,
  qudits: IQudit[],
  selectedQudit: IQudit | null,
  couplings: ICoupling[],
  selectedCoupling: ICoupling | null
}

// eslint-disable-next-line space-before-function-paren
function state(): IDashboardState {
  return {
    appView: EViewOptions.WELCOME,
    lastAppView: EViewOptions.WELCOME,
    dashboardTab: EDashboardTabOptions.DESIGN_MODAL,
    designModelStep: null,
    simulateModelStep: ESimulateModelStep.GATE_TYPES,
    qudits: [],
    selectedQudit: null,
    couplings: [],
    selectedCoupling: null
  }
}

export default state

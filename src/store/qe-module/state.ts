
export interface IQueryParams {
  context?: string,
  contextId?: string,
  employeeId?: number
}

export interface QEState {
  // isUserAuthenticated: boolean,
  queryParams?: IQueryParams,
  userNotes?: string[],
  systemNotes?: string[],
  isUserLicenseLoading: boolean
}

// eslint-disable-next-line space-before-function-paren
function state(): QEState {
  return {
    // isUserAuthenticated: null,
    isUserLicenseLoading: false,
    userNotes: [],
    systemNotes: []
  }
}

export default state

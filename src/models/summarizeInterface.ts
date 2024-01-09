
interface SummarizeNotesResponse {
  data: {
    title: string,
    summary: string
  },
  userNotes: [],
  summary: string,
  errors: [],
  completion: {
    id: string,
    object: string,
    created: number,
    model: 'string',
    choices: [],
    completion: object
    usage: {
      promptTokens: number,
      completionTokens: number,
      totalTokens: number
    }
  }
}
export { SummarizeNotesResponse }

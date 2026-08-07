export interface IWorkData {
  id: number
  title: string
  company?: string
  description: Array<string>
  summary?: string
  summaryLabel?: string
  summaryHighlights?: Array<string>
  showDuration?: boolean
  showRoleStack?: boolean
  periods: Array<{
    start: string
    end?: string
  }>
  stack?: Array<string>
  type?: string
  relationship?: "parallel"
  overlapsWith?: string
  milestones?: Array<{
    date: string
    title: string
    type?: "role-change"
  }>
  stories?: Array<{
    label: string
    body: string
    highlights?: Array<string>
    stack?: Array<string>
  }>
}

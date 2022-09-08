export const useDocumentTitle = (title = process.env.VITE_GLOBAL_APP_TITLE) => {
  document.title = title as string
}

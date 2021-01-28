declare module 'mh-react-library' {
  export interface ISelectContext {
    selectedIds?: string[];
    toggleSelect?: (id: string) => void;
  }
}

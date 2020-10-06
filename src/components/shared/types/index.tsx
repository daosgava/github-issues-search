type node = {
  node: issue;
}
type issue = {
  id: string;
  title: string;
  url: string;
};

export type {
  issue,
  node,
};
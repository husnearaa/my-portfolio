
export type Project = {
  id: string | number;
  title: string;
  image?: string;
  shortDescription?: string;
  overview?: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges?: string[];
  futurePlans?: string[];
};

export type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

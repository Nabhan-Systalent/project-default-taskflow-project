export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  joinedAt: string;
}

export interface WorkspaceSettingsProps {
  initialMembers?: WorkspaceMember[];
}

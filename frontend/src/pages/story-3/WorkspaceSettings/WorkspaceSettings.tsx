import type { WorkspaceMember } from './WorkspaceSettings.types';
import { WorkspaceMemberCard } from './WorkspaceMemberCard';

export const WorkspaceSettings = ({ initialMembers = [] }: WorkspaceSettingsProps) => {
  const [members, setMembers] = React.useState<WorkspaceMember[]>(initialMembers);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleRoleChange = async (memberId: string, newRole: WorkspaceMember['role']) => {
    // Logic to update role via API
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Workspace Settings</h1>
        <p className="text-[var(--color-text-secondary)]">Manage your team members and their access levels.</p>
      </header>

      <section className="bg-[var(--color-background-surface)] rounded-lg border border-[var(--color-border)] p-6">
        <h2 className="text-lg font-semibold mb-4">Member Management</h2>
        {isLoading ? (
          <div className="animate-pulse space-y-4">
             <div className="h-12 bg-[var(--color-background-muted)] rounded" />
          </div>
        ) : members.length === 0 ? (
          <div className="text-center py-8 text-[var(--color-text-secondary)]">
            No members found.
          </div>
        ) : (
          <div className="space-y-2">
            {members.map(member => (
              <WorkspaceMemberCard key={member.id} member={member} onRoleChange={handleRoleChange} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

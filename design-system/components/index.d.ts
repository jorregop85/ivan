// Equipo Virtual — tipos (documentación)
import type { ReactNode } from 'react';
export interface AgentAvatarProps { agent: 'ivan'|'clara'|'andrea'|'olivia'|'sofia'|'elena'|'vera'; size?: number; label?: boolean|'name'; role?: string; }
export declare function AgentAvatar(props: AgentAvatarProps): JSX.Element;
export interface ButtonProps { variant?: 'primary'|'secondary'|'quiet'; icon?: ReactNode; block?: boolean; onClick?: () => void; disabled?: boolean; children: ReactNode; }
export declare function Button(props: ButtonProps): JSX.Element;
export interface StatusPillProps { status: 'avanzando'|'estancado'|'retrocediendo'|'midiendo'; children?: ReactNode; }
export declare function StatusPill(props: StatusPillProps): JSX.Element;
export interface SkillStateProps { state: 'consolidada'|'emergente'|'ausente'|'sin-datos'; children?: ReactNode; }
export declare function SkillState(props: SkillStateProps): JSX.Element;
export interface SparklineProps { data: number[]; goal?: number; baseline?: number; min?: number; max?: number; status?: string; width?: number; height?: number; label?: string; }
export declare function Sparkline(props: SparklineProps): JSX.Element;
export interface GoalCardProps { title: string; agent: string; status: string; metric?: string; data: number[]; goal?: number; baseline?: number; max?: number; href?: string; }
export declare function GoalCard(props: GoalCardProps): JSX.Element;
export interface EvidenceItemProps { source: 'aba'|'casa'|'colegio'|'psiquiatra'; quote: string; date?: string; href?: string; kind?: 'audio'|'registro'; }
export declare function EvidenceItem(props: EvidenceItemProps): JSX.Element;
export interface QuickRepliesProps { options: string[]; value?: string; onChange?: (v: string) => void; allowUnknown?: boolean; label?: string; }
export declare function QuickReplies(props: QuickRepliesProps): JSX.Element;
export interface ChallengeCardProps { text: string; moment?: string; agent?: string; goal?: string; done?: boolean; onToggle?: (d: boolean) => void; responses?: string[]; response?: string; onResponse?: (v: string) => void; }
export declare function ChallengeCard(props: ChallengeCardProps): JSX.Element;
export interface SituationEntryProps { when: string; doThis: string; area?: string; confirmed?: boolean; }
export declare function SituationEntry(props: SituationEntryProps): JSX.Element;
export interface AlertBannerProps { children: ReactNode; action?: string; href?: string; }
export declare function AlertBanner(props: AlertBannerProps): JSX.Element;
export interface ScaleInputProps { label: string; steps?: number; low?: string; high?: string; value?: number; onChange?: (v: number) => void; }
export declare function ScaleInput(props: ScaleInputProps): JSX.Element;
export interface RoleSwitcherProps { value?: 'padres'|'terapeutas'|'psiquiatra'|'colegio'; onChange?: (v: string) => void; }
export declare function RoleSwitcher(props: RoleSwitcherProps): JSX.Element;
export interface AgentNoteProps { agent: string; synthesis?: boolean; role?: string; children: ReactNode; }
export declare function AgentNote(props: AgentNoteProps): JSX.Element;
export interface StepProgressProps { steps: string[]; current: number; }
export declare function StepProgress(props: StepProgressProps): JSX.Element;

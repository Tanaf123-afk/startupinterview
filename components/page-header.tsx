interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h1>
      {description && (
        <p className="text-muted-foreground dark:text-gray-300">{description}</p>
      )}
    </div>
  );
}
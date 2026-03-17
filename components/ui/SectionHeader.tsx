interface SectionHeaderProps {
  label?: string
  title: string
  titleHighlight?: string
  subtitle?: string
}

export default function SectionHeader({ label, title, titleHighlight, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {label && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
        {title}{' '}
        {titleHighlight && (
          <span className="text-gradient">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}

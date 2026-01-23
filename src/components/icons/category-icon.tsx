import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface CategoryIconProps {
  icon: keyof typeof LucideIcons
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animation?: 'float' | 'pulse' | 'hover-rotate' | 'static'
  variant?: 'default' | 'circle' | 'square'
  className?: string
}

export function CategoryIcon({
  icon,
  size = 'md',
  animation = 'static',
  variant = 'default',
  className
}: CategoryIconProps) {
  const IconComponent = LucideIcons[icon] as React.ComponentType<{ className?: string }>

  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const animationMap = {
    float: 'float-animation',
    pulse: 'pulse-glow',
    'hover-rotate': 'icon-hover',
    static: ''
  }

  const variantStyles = {
    default: '',
    circle: 'p-3 rounded-full bg-accent/10',
    square: 'p-3 rounded-lg bg-accent/10'
  }

  return (
    <div className={cn(variantStyles[variant], className)}>
      <IconComponent
        className={cn(
          sizeMap[size],
          animationMap[animation],
          'text-accent'
        )}
      />
    </div>
  )
}

'use client'

import { Badge } from '@/components/ui/badge'
import { getTechIcon } from '@/lib/icon-mappings'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TechBadgeProps {
  tech: string
  variant?: 'default' | 'outline' | 'secondary'
  showIcon?: boolean
  className?: string
}

export function TechBadge({
  tech,
  variant = 'outline',
  showIcon = true,
  className
}: TechBadgeProps) {
  const IconComponent = getTechIcon(tech)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge variant={variant} className={cn('flex items-center gap-1.5', className)}>
        {showIcon && <IconComponent size={16} />}
        <span>{tech}</span>
      </Badge>
    </motion.div>
  )
}

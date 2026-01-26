# Carousel Implementation Analysis - Spacing & Shadow Issues

**Date:** January 26, 2026  
**Analyzed By:** Cline  
**Location:** `src/app/showcase/page.tsx` and `src/components/showcases/carousel-showcase.tsx`

---

## Executive Summary

Analysis of carousel implementations in the showcase page reveals:
- **6 different carousel implementations** with varying spacing configurations
- **All carousels suffer from shadow clipping** due to `overflow-hidden` in base component
- **Featured carousel has the most pronounced shadow issue** due to extra padding
- **Spacing varies from 8px to 20px** between carousel items

---

## Detailed Implementation Comparison

### 1. Featured Projects Carousel (Example 1)

**Purpose:** Mimics homepage featured projects section  
**Layout:** 3 cards desktop, 2 tablet, 1 mobile

```tsx
<Carousel
  opts={{ align: "start", loop: true }}
  className="w-full px-6 py-6"
>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
      <div className="px-1 py-2">
        <Card className="card-hover h-full flex flex-col">
```

**Spacing Breakdown:**
- **Carousel wrapper:** `px-6 py-6` = 24px horizontal + 24px vertical padding
- **CarouselContent:** `-ml-4` = -16px left margin (compensation)
- **CarouselItem:** `pl-4` = 16px left padding
- **Inner div:** `px-1 py-2` = 4px horizontal + 8px vertical padding
- **Effective gap between cards:** ~20px
- **Total horizontal space consumed:** 24px (left) + 20px (gap) + 24px (right) = 68px

**Shadow Issue:** ❌ **SEVERE**
- Extra `px-6` padding pushes content area inward
- `overflow-hidden` on CarouselContent clips shadows
- **First card:** Left shadow completely cut off
- **Last card:** Right shadow completely cut off
- **Middle cards:** Shadows partially visible but inconsistent

---

### 2. Progress Indicator Carousel (Example 2)

**Purpose:** Shows slide position with dot indicators  
**Layout:** 1 card at a time, centered

```tsx
<Carousel
  setApi={setApi}
  opts={{ align: "start", loop: false }}
  className="w-full max-w-sm mx-auto"
>
  <CarouselContent>
    <CarouselItem>
```

**Spacing Breakdown:**
- **Carousel wrapper:** No extra padding (just `w-full max-w-sm mx-auto`)
- **CarouselContent:** Default `-ml-4` from base component
- **CarouselItem:** Default `pl-4` from base component
- **Effective gap:** ~16px (standard)

**Shadow Issue:** ❌ **MODERATE**
- Less pronounced than Featured carousel
- Still clips shadows at viewport edges
- Single item view makes it more noticeable on sides

---

### 3. Single Item Full Width Carousel (Example 3)

**Purpose:** Testimonials or featured content  
**Layout:** 1 card at a time, center aligned

```tsx
<Carousel
  opts={{ align: "center", loop: true }}
  className="w-full max-w-2xl mx-auto"
>
  <CarouselContent>
    <CarouselItem>
```

**Spacing Breakdown:**
- **Carousel wrapper:** No extra padding
- **CarouselContent:** Default `-ml-4`
- **CarouselItem:** Default `pl-4`
- **Effective gap:** ~16px

**Shadow Issue:** ❌ **MODERATE**
- Center alignment helps somewhat
- Shadow clipping still occurs at container edges

---

### 4. Multiple Items Per View Carousel (Example 4)

**Purpose:** Grid-like scrolling with many items  
**Layout:** 4 desktop, 3 tablet, 2 mobile

```tsx
<Carousel
  opts={{ align: "start", loop: true }}
  className="w-full"
>
  <CarouselContent className="-ml-2">
    <CarouselItem className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4">
```

**Spacing Breakdown:**
- **Carousel wrapper:** No extra padding
- **CarouselContent:** `-ml-2` = -8px left margin (SMALLER than standard)
- **CarouselItem:** `pl-2` = 8px left padding (SMALLER than standard)
- **Effective gap:** ~8px (MOST COMPACT)

**Shadow Issue:** ❌ **MILD**
- Tighter spacing means less shadow visibility anyway
- Cards appear closer together
- Shadow clipping less noticeable due to compact layout

---

### 5. Bounded Carousel (No Loop) (Example 5)

**Purpose:** Demonstrates boundary behavior  
**Layout:** 3 cards desktop, 2 tablet, 1 mobile

```tsx
<Carousel
  opts={{ align: "start", loop: false }}
  className="w-full max-w-4xl mx-auto"
>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
```

**Spacing Breakdown:**
- **Carousel wrapper:** No extra padding
- **CarouselContent:** `-ml-4` = -16px left margin
- **CarouselItem:** `pl-4` = 16px left padding
- **Effective gap:** ~16px (standard)

**Shadow Issue:** ❌ **MODERATE**
- Similar to Example 2 & 3
- Boundary behavior makes clipping more obvious at start/end

---

### 6. Vertical Carousel (Example 6)

**Purpose:** Timeline or stacked content  
**Layout:** Vertical scrolling

```tsx
<Carousel
  orientation="vertical"
  opts={{ align: "start", loop: true }}
  className="w-full max-w-sm mx-auto"
>
  <CarouselContent className="-mt-4 h-[400px]">
    <CarouselItem className="pt-4">
```

**Spacing Breakdown:**
- **Carousel wrapper:** No extra padding
- **CarouselContent:** `-mt-4` = -16px top margin
- **CarouselItem:** `pt-4` = 16px top padding
- **Effective gap:** ~16px vertical

**Shadow Issue:** ❌ **MODERATE**
- Same overflow issue but in vertical direction
- Top/bottom shadows clipped

---

## Root Cause Analysis

### The Base Component Issue

In `src/components/ui/carousel.tsx`:

```tsx
const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden"> {/* ← PROBLEM */}
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
```

**Why `overflow-hidden` is needed:**
- Required by Embla Carousel for scroll container
- Creates the sliding viewport effect
- Prevents content from spilling outside boundaries

**Why it causes problems:**
- CSS `overflow-hidden` clips any content that extends beyond container bounds
- Card shadows use `box-shadow` which is rendered outside element bounds
- Shadows on edge items get cut off

---

## Spacing Comparison Table

| Implementation | Wrapper Padding | Content Margin | Item Padding | Inner Padding | Total Gap | Shadow Clipping |
|---|---|---|---|---|---|---|
| **Featured (Ex. 1)** | `px-6 py-6` (24px) | `-ml-4` (-16px) | `pl-4` (16px) | `px-1 py-2` (4px/8px) | ~20px | ❌ Severe |
| **Progress (Ex. 2)** | None | `-ml-4` (-16px) | `pl-4` (16px) | None | ~16px | ❌ Moderate |
| **Single (Ex. 3)** | None | `-ml-4` (-16px) | `pl-4` (16px) | None | ~16px | ❌ Moderate |
| **Multiple (Ex. 4)** | None | `-ml-2` (-8px) | `pl-2` (8px) | None | ~8px | ❌ Mild |
| **Bounded (Ex. 5)** | None | `-ml-4` (-16px) | `pl-4` (16px) | None | ~16px | ❌ Moderate |
| **Vertical (Ex. 6)** | None | `-mt-4` (-16px) | `pt-4` (16px) | None | ~16px | ❌ Moderate |

---

## Key Findings

### Spacing Inconsistencies

1. **Featured carousel is unique** with `px-6 py-6` wrapper padding
2. **Most carousels use standard 16px spacing** (`-ml-4` + `pl-4`)
3. **Multiple items carousel uses compact 8px spacing** (`-ml-2` + `pl-2`)
4. **Only Featured carousel has inner wrapper** with additional `px-1 py-2` padding

### Shadow Blocking Pattern

1. **All implementations affected** - this is a systemic issue
2. **Severity correlates with wrapper padding** - more padding = worse clipping
3. **Featured carousel worst case** due to `px-6` pushing content inward
4. **Edge items always affected** - first card left shadow, last card right shadow
5. **Middle items partially affected** when multiple cards visible

---

## Recommended Solutions

### Option 1: Add Padding to Overflow Container (Simplest)

**Pros:** Quick fix, no component changes  
**Cons:** Affects internal spacing calculations

```tsx
// In carousel-showcase.tsx - Featured example
<Carousel className="w-full px-6 py-6">
  <CarouselContent className="-ml-4">
    {/* Change overflow container padding */}
    <div className="px-4 py-4"> {/* Add this wrapper */}
      <div className="flex -ml-4">
        <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
```

### Option 2: Modify Base Carousel Component (Most Comprehensive)

**Pros:** Fixes all carousels at once  
**Cons:** Requires testing all implementations

```tsx
// In src/components/ui/carousel.tsx
const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden px-4 py-4"> {/* Add padding here */}
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
```

### Option 3: Use CSS Filter Drop-Shadow (Alternative)

**Pros:** Shadows not clipped by overflow  
**Cons:** Requires card style changes

```css
/* In globals.css */
.card-hover {
  /* Remove box-shadow, use filter instead */
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1));
  transition: all 0.3s;
}

.card-hover:hover {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
}
```

### Option 4: Remove Featured Carousel Extra Padding (Quick Win)

**Pros:** Aligns with other carousels, reduces clipping  
**Cons:** Changes visual appearance

```tsx
// Change from:
<Carousel className="w-full px-6 py-6">

// To:
<Carousel className="w-full">
```

---

## Recommendations Summary

### Immediate Actions:
1. **Remove `px-6 py-6` from Featured carousel** to align with other implementations
2. **Add `px-4` to CarouselContent overflow container** in base component
3. **Test all 6 carousel examples** to ensure shadows display correctly

### Long-term Considerations:
1. Consider standardizing spacing across all carousels (16px vs 8px)
2. Document spacing patterns for future carousel implementations
3. Add visual regression tests for shadow rendering

---

## Impact Assessment

### Files Affected:
- `src/components/ui/carousel.tsx` (base component)
- `src/components/showcases/carousel-showcase.tsx` (showcase examples)
- Potentially `src/app/page.tsx` (if homepage uses same pattern)

### Testing Required:
- Visual testing on all 6 carousel examples
- Responsive testing (mobile, tablet, desktop)
- Dark mode shadow visibility
- Browser compatibility (Safari, Chrome, Firefox)

---

## Next Steps

1. **Decision:** Choose solution approach (recommend Option 2 + Option 4)
2. **Implementation:** Modify base carousel component
3. **Update:** Featured carousel to remove extra padding
4. **Test:** All carousel implementations
5. **Document:** New spacing standards

---

**End of Analysis**
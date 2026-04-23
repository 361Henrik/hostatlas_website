# HostAtlas Website Remediation Plan

## Executive Summary

This plan addresses audit findings across the HostAtlas website to improve clarity, commercial persuasiveness, and premium presentation for travel operator prospects. The remediation focuses on three core objectives: reducing cognitive load, strengthening commercial language, and improving product demonstration.

---

## 1. Objectives

| Objective | Description | Business Impact |
|-----------|-------------|-----------------|
| **O1: Reduce Cognitive Load** | Decrease visible text density by 30-40% through expandable sections and prose consolidation | Higher engagement, lower bounce rate |
| **O2: Strengthen Commercial Framing** | Replace research/abstract language with market-facing, operator-specific messaging | Improved conversion intent |
| **O3: Improve Product Demonstration** | Replace passive video with interactive carousel walkthrough | Better product comprehension |
| **O4: Clarify Call-to-Action** | Rewrite closing section with active invitation and specific CTA | Higher contact rate |

---

## 2. Findings Summary & Risk Prioritization

| Finding ID | Section | Issue | Risk Level | Impact |
|------------|---------|-------|------------|--------|
| **F1** | TheMomentSection | Text density: 5 repetitive paragraphs in intro | Medium | Visitors disengage before reaching key content |
| **F2** | TheMomentSection | "From the research" framing reads academic, not commercial | High | Undermines business credibility with operators |
| **F3** | TheMomentSection | Verbatim quotes disconnected from findings | Medium | Evidence doesn't reinforce insights |
| **F4** | TheExperienceSection | Video demo unlikely to load; no fallback | Critical | Product demo completely fails |
| **F5** | TheExperienceSection | 6 lenses visible at once = information overload | Low | Minor cognitive friction |
| **F6** | HeroSection | Text positioned over image focal point on desktop | Medium | Visual collision reduces premium feel |
| **F7** | InsightSection | Orphaned pull-quote above section header | Medium | Disconnected messaging flow |
| **F8** | ClosingSection | Passive headline, generic CTA | Critical | Weak conversion at decision point |
| **F9** | UnreadLandscapeSection | 3+ paragraphs visible = text wall | Low | Skipped content |
| **F10** | PersonalRelevanceSection | Closing paragraph redundant after blockquote | Low | Unnecessary scroll |
| **F11** | TheMomentSection | Duplicate blockquote with OperatorSection | Low | Repetition dilutes impact |

---

## 3. Corrective Actions

### Phase 1: Critical (Immediate)

#### CA-1: Replace Video Demo with Product Carousel
- **Finding:** F4
- **Action:** Create `ProductCarousel.tsx` component with 4 CSS-built phone screens showing: route overview, story surfacing, audio playback, operator dashboard
- **Success Criteria:** Carousel renders on all devices; no external dependencies; users can navigate between screens
- **Owner:** Frontend
- **Timeline:** Day 1
- **Status:** COMPLETE

#### CA-2: Rewrite Closing Section
- **Finding:** F8
- **Action:** Replace passive headline with active invitation; change CTA from "Get in touch" to "Request a walkthrough"; add email subject line pre-fill
- **Success Criteria:** CTA click-through rate measurable; copy addresses river/coastal/expedition operators directly
- **Owner:** Frontend + Copy
- **Timeline:** Day 1
- **Status:** COMPLETE

### Phase 2: High Priority (Week 1)

#### CA-3: Reframe Research Section
- **Finding:** F2, F3, F11
- **Action:** 
  - Rename overline "From the research" → "What operators' guests say"
  - Create `SpeechBubble.tsx` component for verbatim quotes
  - Visually tie each verbatim to its corresponding finding
  - Add "3 of 7 findings" closing acknowledgment
  - Remove duplicate blockquote
- **Success Criteria:** Verbatims appear as speech bubbles adjacent to findings; no orphaned quotes
- **Owner:** Frontend
- **Timeline:** Day 1-2
- **Status:** COMPLETE

#### CA-4: Fix Hero Text Positioning
- **Finding:** F6
- **Action:** Implement 2-column grid wrapper; constrain text to left column (max 520px) on lg+ screens
- **Success Criteria:** Text never overlaps right 40% of viewport on desktop
- **Owner:** Frontend
- **Timeline:** Day 1
- **Status:** COMPLETE

#### CA-5: Integrate Orphaned Verbatim
- **Finding:** F7
- **Action:** Remove standalone pull-quote above InsightSection header; integrate verbatim as SpeechBubble within section body
- **Success Criteria:** No content appears above section header; verbatim contextually placed
- **Owner:** Frontend
- **Timeline:** Day 1
- **Status:** COMPLETE

### Phase 3: Medium Priority (Week 2)

#### CA-6: Consolidate TheMomentSection Intro
- **Finding:** F1
- **Action:** Reduce intro from 5 paragraphs to 2; merge repetitive ideas
- **Success Criteria:** Intro word count reduced by 50%+; key message preserved
- **Owner:** Frontend + Copy
- **Timeline:** Day 1
- **Status:** COMPLETE

#### CA-7: Make Lens Grid Expandable
- **Finding:** F5
- **Action:** Show 3 lenses by default; add "See all six lenses" toggle
- **Success Criteria:** Initial render shows 3 cards; toggle reveals remaining 3
- **Owner:** Frontend
- **Timeline:** Day 1
- **Status:** COMPLETE

### Phase 4: Low Priority (Week 2-3)

#### CA-8: Add Expandable Sections for Text Density
- **Finding:** F9, F10
- **Action:**
  - UnreadLandscapeSection: Show 2 paragraphs; "Read more" for 3rd
  - PersonalRelevanceSection: Hide closing paragraph behind expand
- **Success Criteria:** Above-fold text reduced; expand triggers reveal content
- **Owner:** Frontend
- **Timeline:** Day 1
- **Status:** COMPLETE

---

## 4. Implementation Status

| Corrective Action | Status | Completion Date |
|-------------------|--------|-----------------|
| CA-1: Product Carousel | Complete | Today |
| CA-2: Closing Section Rewrite | Complete | Today |
| CA-3: Research Section Reframe | Complete | Today |
| CA-4: Hero Text Positioning | Complete | Today |
| CA-5: Insight Verbatim Integration | Complete | Today |
| CA-6: TheMoment Intro Consolidation | Complete | Today |
| CA-7: Expandable Lens Grid | Complete | Today |
| CA-8: Expandable Text Sections | Complete | Today |

---

## 5. New Components Created

| Component | Purpose | Location |
|-----------|---------|----------|
| `SpeechBubble.tsx` | Reusable verbatim quote display with CSS tail, bronze accent | `/components/SpeechBubble.tsx` |
| `ProductCarousel.tsx` | 4-screen product walkthrough with arrow nav, dot indicators, captions | `/components/ProductCarousel.tsx` |

---

## 6. Files Modified

| File | Changes Made |
|------|--------------|
| `HeroSection.tsx` | 2-col grid wrapper; text constrained to left 520px on desktop |
| `TheMomentSection.tsx` | Intro trimmed to 2 paragraphs; SpeechBubble verbatims; "3 of 7" close; duplicate blockquote removed |
| `TheExperienceSection.tsx` | Video/AR mockup replaced with ProductCarousel; lens grid made expandable |
| `UnreadLandscapeSection.tsx` | 3rd paragraph hidden behind "Read more" |
| `PersonalRelevanceSection.tsx` | Closing paragraph hidden behind "Read more" |
| `InsightSection.tsx` | Orphan pull-quote removed; verbatim integrated as SpeechBubble |
| `ClosingSection.tsx` | Full rewrite — active headline, specific copy, "Request a walkthrough" CTA |

---

## 7. Success Criteria & Metrics

### Immediate (Post-Deploy)

| Metric | Target | Measurement |
|--------|--------|-------------|
| All sections render without error | 100% | Manual QA |
| ProductCarousel loads on mobile/desktop | 100% | Device testing |
| No console errors | 0 errors | Browser dev tools |
| CTA email link includes subject line | Yes | Click test |

### Short-term (2 Weeks)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Average scroll depth | > 70% | Analytics |
| Time on page | > 90 seconds | Analytics |
| CTA click rate | > 3% | Analytics |
| Bounce rate | < 45% | Analytics |

### Long-term (30 Days)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Contact form submissions | > 5/month | Email tracking |
| Qualified operator conversations | > 2/month | CRM |
| Return visitor rate | > 15% | Analytics |

---

## 8. Continuous Monitoring

### Weekly Review Checklist

- [ ] Check analytics for scroll depth and time-on-page trends
- [ ] Review CTA click-through rate
- [ ] Monitor for any new console errors
- [ ] Test carousel functionality across devices
- [ ] Review any user feedback or operator comments

### Monthly Audit

- [ ] Compare metrics against success criteria
- [ ] Identify any new text density issues
- [ ] Review competitive positioning
- [ ] Assess if further copy refinement needed
- [ ] Document any new findings for next iteration

---

## 9. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Carousel images don't load | Low | High | CSS-built screens with no external dependencies |
| Expand toggles confuse users | Low | Medium | Clear "Read more" / "See all" labels |
| CTA wording doesn't resonate | Medium | High | A/B test alternative CTAs if conversion low |
| Mobile performance degradation | Low | Medium | Lazy-load carousel screens; minimal JS |

---

## 10. Rollback Plan

If critical issues emerge post-deployment:

1. **Immediate:** Revert to previous Git commit via Vercel dashboard
2. **Partial:** Disable specific components via feature flags (if implemented)
3. **Hotfix:** Deploy targeted fix within 2 hours of issue identification

---

## 11. Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Implementation Lead | — | — | — |
| Copy Review | — | — | — |
| QA Approval | — | — | — |
| Stakeholder Approval | — | — | — |

---

## Appendix A: Copy Changes Summary

| Location | Before | After |
|----------|--------|-------|
| TheMoment overline | "From the research" | "What operators' guests say" |
| TheMoment closing | "Extraordinary landscapes, quietly unexplained." | "Guides bring the highlights to life. The Host Atlas curates the silent stretches." |
| Closing headline | "Currently in conversation with a select number of operators." | "River, coastal, and expedition operators: see it on your route." |
| Closing CTA | "Get in touch" | "Request a walkthrough" |
| Closing body | Generic/passive | "We'll show you the platform on a route like yours. What a deployment could look like. What your guests would actually see." |

---

## Appendix B: Component Specifications

### SpeechBubble Props
```typescript
interface SpeechBubbleProps {
  quote: string;
  variant?: "default" | "light";  // default = cream bg, light = white bg
  tailPosition?: "left" | "right";
  className?: string;
}
```

### ProductCarousel Screens
1. **Route Overview** — Map with active route line, vessel position indicator
2. **Story Surfacing** — POI card appearing during sailing (history lens example)
3. **Audio Playing** — Expanded story with audio waveform, geology lens
4. **Operator Dashboard** — Engagement metrics, route signals

---

*Plan Version: 1.0*  
*Last Updated: Today*  
*Status: All corrective actions complete*

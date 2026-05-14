# Frontend Systems Lab

An advanced frontend engineering playground focused on rendering behavior, performance optimization, server state management, and modern React architecture patterns.

Built with Next.js, React, TypeScript, and TanStack Query.

## Features

### Render Visualization

- React render tracking
- Component rerender timeline
- Memoization comparison
- Callback stability visualization
- Expensive render simulation

### Virtualization

- Large list rendering
- Virtual scrolling
- Performance-focused rendering strategies

### Optimistic UI

- Optimistic updates
- Rollback handling
- Query invalidation
- Mutation lifecycle visualization

### Suspense & Streaming

- Async server components
- Suspense boundaries
- Streaming UI patterns
- Skeleton loading states

### Shared UI System

- Reusable UI primitives
- Variant-based button system
- Shared styling utilities
- Design system foundations

## Architecture Decisions

### Feature-Based Structure

The application is organized by feature boundaries instead of technical layers.  
Each feature owns its:

- components
- hooks
- state
- API logic
- domain behavior

This improves scalability and long-term maintainability.

---

### Why React Query Instead of Global State

Server state is managed with TanStack Query instead of a global client store.

Benefits:

- cache management
- request deduplication
- optimistic updates
- invalidation
- async lifecycle handling

---

### Why Shared UI Primitives

Reusable UI primitives reduce duplication and create visual consistency across the platform.

Current primitives:

- Card
- Button
- Skeleton

---

### Why App Router

Next.js App Router enables:

- nested layouts
- server components
- streaming
- Suspense boundaries
- progressive rendering

## Engineering Concepts Demonstrated

- React rendering lifecycle
- Referential stability
- Memoization strategies
- React.memo
- useCallback
- useMemo
- Virtualized rendering
- Optimistic UI updates
- Query caching
- Async server components
- Suspense boundaries
- Streaming UI
- Feature-driven architecture
- Shared UI systems
- Component composition

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- class-variance-authority
- clsx
- tailwind-merge

## Local Development

npm install
npm run dev

# Future improvements

## Future Improvements

- Accessibility playground
- WebSocket synchronization demo
- Render heatmap overlays
- Query inspector tooling
- Performance flamegraph visualization
- Collaborative state simulation

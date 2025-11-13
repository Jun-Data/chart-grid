# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server with Vite HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Architecture Overview

### Application Structure

This is a React + Vite application using:
- **React 19** with SWC for Fast Refresh
- **Tailwind CSS v4** for styling
- **React Three Fiber** (@react-three/fiber + @react-three/drei) for 3D visualization
- **Chart libraries**: amCharts5, ECharts, ag-grid-react

### Folder Organization

```
src/
├── pages/           # Page-level components (ChartsPage, FilePage, ThreeDPage)
├── components/
│   ├── charts/     # Chart components (Bar, Line, Gauge, DonutChart, etc.)
│   └── ...         # Other shared components (Navbar, etc.)
└── App.jsx          # Root component with client-side routing
```

**Important**: Pages go in `src/pages/`, chart components go in `src/components/charts/`. Do not place pages in the components folder.

### Routing

Uses simple client-side routing via `useState` in App.jsx:
- Navbar triggers page changes via `onPageChange` callback
- App.jsx switches between pages using a switch statement
- Current pages: "charts", "file", "3D"

### 3D Visualization (ThreeDPage)

**GLB File Loading**:
- GLB model located at `/public/models/sol.glb` (7.8MB, 28 equipment objects)
- Uses `useGLTF` hook from @react-three/drei
- Equipment objects are named `sol_Cylinder007` through `sol_Cylinder034`

**HMR Handling**:
- Vite's HMR can cause incomplete scene loading (29 objects with no names vs. 309 full objects)
- Solution: Check `totalCount < 100` to filter out incomplete scenes
- Only update state when fully loaded scene is detected

**Equipment Selection**:
- Click detection: Uses `userData.equipmentName` on mesh objects
- Color highlighting: Selected equipment turns orange (0xff6b00), non-selected retain original colors
- Material management: Original materials are cloned and stored in `userData.originalMaterial`
- Performance optimization: Only processes selected/previously-selected equipment, not all 28

**Camera Configuration**:
- Initial position and target are set in Canvas component
- Use OrbitControls with `target` prop to set camera focal point
- To find ideal camera position: temporarily use a CameraLogger component that logs position + target on change

### Gitmoji Convention

Commit messages use gitmoji format. Recent examples:
- `✨ Feat : Three.js 설비 렌더링 및 클릭 기능 구현`
- `🔥 Fix : 불필요한 파일 업로드 항목 제거`
- `➕ EChart 추가`

Include the trailing attribution in commits:
```
🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

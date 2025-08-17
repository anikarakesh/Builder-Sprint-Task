"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";

// Types
export interface PropertyFilters {
  city?: string;
  propertyType?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  configurations?: string[]; // ["1BHK", "2BHK", "3BHK"]
  amenities?: string[];
  status?: "active" | "inactive";
}

export interface SortConfig {
  field: string;
  direction: "asc" | "desc";
}

export interface ProjectEdit {
  projectId: string;
  field: string;
  value: any;
  isDirty: boolean;
}

export interface AppState {
  // Filters
  buyerFilters: PropertyFilters;
  builderFilters: PropertyFilters;
  
  // Sorting
  buyerSort: SortConfig;
  builderSort: SortConfig;
  
  // Edits (for builder dashboard)
  projectEdits: Record<string, Record<string, any>>;
  dirtyProjects: Set<string>;
  
  // UI State
  searchQuery: string;
  selectedProject?: string;
  viewMode: "grid" | "list";
}

// Actions
export type AppAction =
  | { type: "SET_BUYER_FILTERS"; payload: Partial<PropertyFilters> }
  | { type: "SET_BUILDER_FILTERS"; payload: Partial<PropertyFilters> }
  | { type: "SET_BUYER_SORT"; payload: SortConfig }
  | { type: "SET_BUILDER_SORT"; payload: SortConfig }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_SELECTED_PROJECT"; payload: string | undefined }
  | { type: "SET_VIEW_MODE"; payload: "grid" | "list" }
  | { type: "UPDATE_PROJECT_FIELD"; payload: { projectId: string; field: string; value: any } }
  | { type: "SAVE_PROJECT_CHANGES"; payload: { projectId: string } }
  | { type: "DISCARD_PROJECT_CHANGES"; payload: { projectId: string } }
  | { type: "RESET_FILTERS"; payload: "buyer" | "builder" };

// Initial state
const initialState: AppState = {
  buyerFilters: {},
  builderFilters: {},
  buyerSort: { field: "title", direction: "asc" },
  builderSort: { field: "title", direction: "asc" },
  projectEdits: {},
  dirtyProjects: new Set(),
  searchQuery: "",
  viewMode: "grid"
};

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_BUYER_FILTERS":
      return {
        ...state,
        buyerFilters: { ...state.buyerFilters, ...action.payload }
      };
      
    case "SET_BUILDER_FILTERS":
      return {
        ...state,
        builderFilters: { ...state.builderFilters, ...action.payload }
      };
      
    case "SET_BUYER_SORT":
      return {
        ...state,
        buyerSort: action.payload
      };
      
    case "SET_BUILDER_SORT":
      return {
        ...state,
        builderSort: action.payload
      };
      
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload
      };
      
    case "SET_SELECTED_PROJECT":
      return {
        ...state,
        selectedProject: action.payload
      };
      
    case "SET_VIEW_MODE":
      return {
        ...state,
        viewMode: action.payload
      };
      
    case "UPDATE_PROJECT_FIELD":
      const { projectId, field, value } = action.payload;
      const newProjectEdits = {
        ...state.projectEdits,
        [projectId]: {
          ...state.projectEdits[projectId],
          [field]: value
        }
      };
      const newDirtyProjects = new Set(state.dirtyProjects);
      newDirtyProjects.add(projectId);
      
      return {
        ...state,
        projectEdits: newProjectEdits,
        dirtyProjects: newDirtyProjects
      };
      
    case "SAVE_PROJECT_CHANGES":
      const savedProjectId = action.payload.projectId;
      const newDirtyAfterSave = new Set(state.dirtyProjects);
      newDirtyAfterSave.delete(savedProjectId);
      
      return {
        ...state,
        dirtyProjects: newDirtyAfterSave
      };
      
    case "DISCARD_PROJECT_CHANGES":
      const discardProjectId = action.payload.projectId;
      const { [discardProjectId]: removed, ...restEdits } = state.projectEdits;
      const newDirtyAfterDiscard = new Set(state.dirtyProjects);
      newDirtyAfterDiscard.delete(discardProjectId);
      
      return {
        ...state,
        projectEdits: restEdits,
        dirtyProjects: newDirtyAfterDiscard
      };
      
    case "RESET_FILTERS":
      if (action.payload === "buyer") {
        return {
          ...state,
          buyerFilters: {},
          searchQuery: ""
        };
      } else {
        return {
          ...state,
          builderFilters: {}
        };
      }
      
    default:
      return state;
  }
}

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook
export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
}

export interface ProjectContext {
  stage: 'DISCOVERY' | 'REFINEMENT' | 'STRATEGY' | 'BOARDROOM';
  missingCritical: string[];
  lastAction: string;
}

export async function analyzeContext(projectData: any): Promise<ProjectContext> {
  const missing: string[] = [];
  if (!projectData.vatNumber) missing.push('VAT Number');
  if (!projectData.capex) missing.push('Machinery Quotes');
  
  let currentStage: ProjectContext['stage'] = 'DISCOVERY';
  
  if (projectData.projectName && projectData.sector) {
    currentStage = 'REFINEMENT';
  }
  if (missing.length === 0) {
    currentStage = 'STRATEGY';
  }
  
  return {
    stage: currentStage,
    missingCritical: missing,
    lastAction: 'AUTO_ANALYSIS'
  };
}

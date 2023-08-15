import { StudentSimpleModel } from "./student-models";

export interface SearchStudentGroups {
    q: string; 
    count: number | null; 
    offSet: number; 
}

export interface StudentGroupSimpleModel {
    id: string; 
    name: string; 
    studentCount: number; 
    isDeleting: boolean; 
    useHtmlForName: boolean; 
    nameHtml: string; 
}

export interface StudentGroupDetailedModel {
    id: string; 
    name: string; 
    enterCode: string; 
    studentCount: number; 
    solutionsCount: number;
    isDeleting: boolean;
    useHtmlForName: boolean; 
    nameHtml: string; 
    useCourse: boolean;
}

export interface StudentInGroupSimpleModel {
    student: StudentSimpleModel; 
    isBlocked: boolean; 
    shouldBlockOnUtc: string; 
    enteredOnUtc: string; 
}

export interface SearchStudentsInGroup {
    groupId: string; 
    q: string; 
    count: number | null; 
    offSet: number; 
}
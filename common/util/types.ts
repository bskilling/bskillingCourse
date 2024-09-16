// types.ts
export interface Skill {
    _id: string;
    title: string;
}
export interface Objective {
    _id: string;
    title: string;
}
export interface Prereqisite {
    _id: string;
    title: string;
}
export interface Resource {
    _id: string;
    title: string;
}
export interface Benifit {
    _id: string;
    title: string;
}
export interface SectionPart {
    title: string;
    _id: string;
}
export interface FAQ {
    _id: string;
    question: string;
    answer: string;
}
// Define the type for each curriculum module
export interface CurriculumModule {
    title: string;
    videoSection: string;
    section_parts: SectionPart[];
    _id: string;
}

export interface TrainingMetadataTypes {
    preview_video?: string;
    overview?: string;
    skills_covered?: Skill[];
    objectives?: Objective[];
    prerequisites?: Prereqisite[];
    resources?: Resource[];
    benefits?:Benifit[]
    curriculum?: CurriculumModule[];
    certification_text?: string;
    certification_image?: string;
    FAQs?: FAQ[];
}

export interface TrainingBatchTypes {
    description: string;
    batch_name: string;
    isPaid: boolean;
    trainer: string;
    start_time: string; 
    enrollment_end_date: string; 
    end_date: string; 
    _id: string;
}


export interface Coursedetailstype {
    title: string;
    category: string;
    price: string;
    description?: string;
    ratings?: string;
    enrolledStudents?: string;
    reviews?: string;
    lastUpdated?: string;
    level?: string;
    duration?: number;
    language?: string;
    assessment_required?: boolean;
    training_metadata?: TrainingMetadataTypes;
    training_batches?: TrainingBatchTypes;
    tabContents?: { [key: number]: string }; 
}
export interface Course {
    _id: string;
    title: string;
    level: string;
    category: string;
    language: string;
    owned_by: string;
    endorsed_by: string;
    price: number;
    currency: string;
    coupon_code: string;
    discount: number;
    preview_image_uri: string;
    isPaid: boolean;
    training_mode: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
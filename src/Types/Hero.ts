export interface Hero_Type {
    variant?: string;
    title: string,
    heading?: string;
    desciption?: string,
    lefttext?: string,
    rightText?: string,
    showSlider: boolean;
    bottomVideo?: string;
    bottomCenterText?: string;
    caseStudyBottomSection?: boolean;
    isButton?: boolean;
    gap?: "less" | "more";
    twoButtons?: boolean;
    setOfButtons?: boolean;
    positionOfSetOfButtons?: "bottom" | "top";
    buttonTexts?: string[];
    webHostingBottomText?: boolean;
    leftBottomText?: string;
    data?: {
        title: string;
        value: string;
    }[];
    bottomImage?: string;
    Paragraph?: string;
    HeadingPara?: string
    showGlass?: boolean
    issection?: string
}

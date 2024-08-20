interface Navigation {
    title: string;
    description: string;
    path: string;
}

interface Content {
    stage: number;
    location: [];
    moddings: [];
    filename: string;
}

interface DataItem {
    navigation: Navigation;
    content: Content;
}
type GodHandDataTypes = DataItem[];

export default GodHandDataTypes;
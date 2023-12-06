export interface Material{
 module_id : number; 
 ppt_url: string;
}

export interface StudentFlashcardProps {
    onPress: () => void;
    isTurnedOver: boolean;
    children: React.ReactNode; // Specify the type of children prop
  }
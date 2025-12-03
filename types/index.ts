export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Platform {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

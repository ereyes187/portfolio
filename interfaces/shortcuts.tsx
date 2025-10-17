interface ShortcutsMenuContext {
  open: boolean;
  setOpen: (open: ShortcutsMenuContext["open"]) => void;

  tabs: string[];
  setTabs: (tabs: ShortcutsMenuContext["tabs"]) => void;
}

interface ShortcutsMenuItem {
  id: string;
  title: string;
  group: string;
  icon: React.ComponentType;
  action?: () => void;
  children?: ShortcutsMenuItem[];
}

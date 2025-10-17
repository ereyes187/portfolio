"use client";

import { useShortcutsMenu } from "@/providers/shortcuts-provider";
import { useMenuItems } from "@/hooks/useMenuItems";
import { Command } from "cmdk";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { LuSearch } from "react-icons/lu";

function getFlattenedMenuItems(
  items: ShortcutsMenuItem[],
  result: ShortcutsMenuItem[] = []
): ShortcutsMenuItem[] {
  items.forEach((item) => {
    result.push(item);
    if (item.children) {
      getFlattenedMenuItems(item.children, result);
    }
  });

  return result;
}

export default function ShortcutsMenu() {
  const { open, setOpen, tabs, setTabs } = useShortcutsMenu();
  const menuItems = useMenuItems();
  const flattenedItems = getFlattenedMenuItems(menuItems);

  const currentMenuItems =
    flattenedItems.find(({ id }) => tabs[tabs.length - 1] === id)?.children ??
    menuItems;

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        if (tabs.length > 1) {
          setTabs(tabs.slice(0, tabs.length - 1));
        } else {
          setOpen(false);
        }
      }}
    >
      <DialogContent aria-describedby="shortcuts-menu" showCloseButton={false}>
        <DialogTitle className="sr-only">Shortcuts Menu</DialogTitle>
        <Command>
          <div className="flex flex-col">
            <div className="flex flex-row px-4 pt-4 gap-x-2">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => {
                    setTabs(tabs.slice(0, i + 1));
                  }}
                  className="py-2 rounded bg-glass px-4 text-sm transition hover:bg-highlight hover:text-action"
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex flex-row items-center gap-x-2 text-lg p-4 border-b border-trim">
              <LuSearch />
              <Command.Input
                autoFocus
                placeholder="Search..."
                className="w-full bg-transparent outline-none placeholder:text-foreground/50"
              />
            </div>
          </div>
          <Command.List className="max-h-80 overflow-y-scroll p-4">
            <Command.Empty className="flex items-center justify-center py-6">
              No results found.
            </Command.Empty>

            {currentMenuItems
              .filter(
                ({ group }, i) =>
                  currentMenuItems.map(({ group }) => group).indexOf(group) ===
                  i
              )
              .map(({ group }) => (
                <Command.Group key={group} heading={group}>
                  {currentMenuItems
                    .filter((item) => item.group === group)
                    .map(({ id, title, icon: Icon, action, children }) => (
                      <Command.Item
                        key={id}
                        value={title}
                        onSelect={() => {
                          if (children) {
                            setTabs([...tabs, id]);
                          } else {
                            setOpen(false);

                            if (group === "Navigation") {
                              setTabs([id]);
                            }

                            if (action) action();
                          }
                        }}
                        className="flex cursor-pointer items-center gap-x-4 rounded p-3 data-[selected=true]:bg-highlight data-[selected=true]:text-action text-lg"
                      >
                        {Icon && <Icon />}
                        <span className="flex-1">{title}</span>
                      </Command.Item>
                    ))}
                </Command.Group>
              ))}
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

import { BsClipboard, BsEmojiSmile } from "react-icons/bs";
import React from "react";
import { SittlyCommand } from "sittly-devtools/dist/components/own_command";
import * as unicodeEmoji from "unicode-emoji";
import {
  copyToClipboard,
  pasteToCurrentWindow,
} from "sittly-devtools/dist/api/clipboard";
import { useServices } from "sittly-devtools/dist/hooks/context";
import { ExtensionMetadata, ExtensionPages } from "sittly-devtools/dist/types";
const emojis = unicodeEmoji.getEmojis();

const pages: ExtensionPages = [
  {
    name: "Emojis",
    route: "/emojis",
    component: () => {
      const setContextMenuOptions = useServices(
        (state) => state.setContextMenuOptions
      );
      return (
        <SittlyCommand.Grid
          id="emojis-page-list"
          columns={4}
          items={emojis.map((emoji) => {
            return {
              onClick() {
                pasteToCurrentWindow(emoji.emoji);
              },
              onHighlight() {
                setContextMenuOptions([
                  {
                    title: "Copy",
                    onClick() {
                      copyToClipboard(emoji.emoji);
                    },
                    description: `Copy ${emoji.emoji} to the clipboard`,
                    icon: <BsClipboard />,
                  },
                ]);
              },
              filteringText: emoji.description,
              customChildren: (
                <div className="flex items-center justify-center text-6xl">
                  {emoji.emoji}
                </div>
              ),
              className: "flex items-center justify-center",
            };
          })}
        />
      );
    },
    description: "A collection of emojis",
    icon: <BsEmojiSmile />,
  },
];

/**
 * Metadata is really important, it's used to display your extension in the app.
 * @see docs.com
 */
const metadata: ExtensionMetadata = {
  name: "Emojis",
  description: "Emojis for everyone!",
  icon: <BsEmojiSmile />,
  repoUrl: "https://github.com/JulianKominovic/sittly-emoji-extension",
};

export { pages, metadata };

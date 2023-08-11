import * as React from "react";
import { BsClipboard, BsEmojiSmile } from "react-icons/bs";
// import { SittlyCommand } from "sittly-devtools/dist/components/own_command";
// import * as unicodeEmoji from "unicode-emoji";
import {
  copyToClipboard,
  pasteToCurrentWindow,
} from "sittly-devtools/dist/api/clipboard";
import { useServices } from "sittly-devtools/dist/hooks/context";
import { ExtensionMetadata, ExtensionPages } from "sittly-devtools/dist/types";
import { BsCollection } from "react-icons/bs";
import { Badge } from "sittly-devtools/dist/components/badge";
import { Button } from "sittly-devtools/dist/components/button";
import { Checkbox } from "sittly-devtools/dist/components/checkbox";
import { Fieldset } from "sittly-devtools/dist/components/fieldset";
import { Input } from "sittly-devtools/dist/components/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "sittly-devtools/dist/components/radio";
import { Slider } from "sittly-devtools/dist/components/slider";
import { Switch } from "sittly-devtools/dist/components/switch";

// const emojis = unicodeEmoji.getEmojis();

const Title = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold leading-none">UI Elements </h1>

      <p className="mb-6 leading-none text-muted-foreground">
        Showroom of UI elements{" "}
        <a
          className="text-xs font-normal underline"
          href="https://ui.shadcn.com/"
        >
          based on Shadcn UI
        </a>
      </p>
    </div>
  );
};

const GroupTitle = ({ children }: { children: string }) => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-sm font-medium leading-none text-muted-foreground whitespace-nowrap">
        {children}
      </h2>{" "}
      <hr className="block w-full text-neutral-100" />
    </div>
  );
};

const pages: ExtensionPages = [
  {
    name: "Emojis",
    route: "/emojis",
    component: () => {
      // const setContextMenuOptions = useServices(
      //   (state) => state.setContextMenuOptions
      // );
      return (
        <main className="flex flex-col h-full gap-4 px-4 py-2 overflow-y-auto">
          <Title />
          <GroupTitle>Badges</GroupTitle>
          <hgroup className="flex items-center gap-2 mb-4">
            <Badge variant="default">default</Badge>
            <Badge variant="destructive">destructive</Badge>
            <Badge variant="secondary">secondary</Badge>
            <Badge variant="outline">outline</Badge>
          </hgroup>
          <GroupTitle>Buttons</GroupTitle>
          <hgroup className="grid items-center grid-cols-3 gap-2">
            <Button className="w-full" variant="default">
              default
            </Button>
            <Button className="w-full" variant="destructive">
              destructive
            </Button>
            <Button className="w-full" variant="secondary">
              secondary
            </Button>
            <Button className="w-full" variant="outline">
              outline
            </Button>
            <Button className="w-full" variant="ghost">
              ghost
            </Button>
            <Button className="w-full" variant="link" asChild>
              <a href="#">link use asChild prop</a>
            </Button>
          </hgroup>
          <GroupTitle>Form inputs</GroupTitle>
          <hgroup className="flex flex-col gap-2 mb-4">
            <Checkbox>
              <Fieldset.Label className="min-w-[120px]">
                Accept terms and conditions
              </Fieldset.Label>
              <Fieldset.Details>
                You must accept our terms and conditions to continue
              </Fieldset.Details>
            </Checkbox>
            <Input>
              <Fieldset.Label className="min-w-[120px]">Text</Fieldset.Label>
              <Button className="h-8 " variant="default">
                default
              </Button>
            </Input>
            <Input type="file">
              <Fieldset.Label className="min-w-[120px]">Files</Fieldset.Label>
            </Input>
            <Input type="number">
              <Fieldset.Label className="min-w-[120px]">Number</Fieldset.Label>
            </Input>
            <Input type="password">
              <Fieldset.Label className="min-w-[120px]">
                Password
              </Fieldset.Label>
            </Input>
            <Slider defaultValue={[22]}>
              <Fieldset.Label className="min-w-[120px]">Slider</Fieldset.Label>
            </Slider>
            <Switch>
              <Fieldset.Label className="min-w-[120px]">Switch</Fieldset.Label>
            </Switch>
            <RadioGroup>
              <Fieldset.Label className="min-w-[120px]">Radio 1</Fieldset.Label>
              <RadioGroupItem value="1">
                <Fieldset.Label className="min-w-[120px]">
                  Radio 1
                </Fieldset.Label>
                <Fieldset.Details>Radio 1 details</Fieldset.Details>
              </RadioGroupItem>
              <RadioGroupItem value="2">
                <Fieldset.Label className="min-w-[120px]">
                  Radio 2
                </Fieldset.Label>
                <Fieldset.Details>Radio 2 details</Fieldset.Details>
              </RadioGroupItem>
            </RadioGroup>
          </hgroup>
        </main>
        // EL GRID O ALGO DE ADENTRO ESTÁ CAUSANDO UN LOOP INFINITO DE RENDERS
        // PUEDE SER UN LOOP DE IMPORTS
        // O UN LOOP DE CONTEXTOS
        // <SittlyCommand.List
        //   id="emojis-page-list"
        //   // columns={4}
        //   items={emojis.map((emoji) => {
        //     return {
        //       onClick() {
        //         pasteToCurrentWindow(emoji.emoji);
        //       },
        //       onHighlight() {
        //         setContextMenuOptions([
        //           {
        //             title: "Copy",
        //             onClick() {
        //               copyToClipboard(emoji.emoji);
        //             },
        //             description: `Copy ${emoji.emoji} to the clipboard`,
        //             icon: <BsClipboard />,
        //           },
        //         ]);
        //       },
        //       filteringText: emoji.description,
        //       customChildren: (
        //         <div className="flex items-center justify-center text-6xl">
        //           {emoji.emoji}
        //         </div>
        //       ),
        //       className: "flex items-center justify-center",
        //     };
        //   })}
        // />
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

export { metadata, pages };

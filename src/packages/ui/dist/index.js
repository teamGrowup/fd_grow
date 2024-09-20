"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Button: () => Button,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Input: () => Input,
  buttonVariants: () => buttonVariants
});
module.exports = __toCommonJS(src_exports);

// src/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// ../utils/src/index.tsx
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/button.tsx
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />;
  }
);
Button.displayName = "Button";

// src/input.tsx
var React2 = __toESM(require("react"));
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />;
  }
);
Input.displayName = "Input";

// src/accordion.tsx
var React3 = __toESM(require("react"));
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"));
var import_react_icons = require("@radix-ui/react-icons");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React3.forwardRef(({ className, ...props }, ref) => <AccordionPrimitive.Item
  ref={ref}
  className={cn("border-b", className)}
  {...props}
/>);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React3.forwardRef(({ className, children, ...props }, ref) => <AccordionPrimitive.Header className="flex"><AccordionPrimitive.Trigger
  ref={ref}
  className={cn(
    "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
    className
  )}
  {...props}
>
  {children}
  <import_react_icons.ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
</AccordionPrimitive.Trigger></AccordionPrimitive.Header>);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React3.forwardRef(({ className, children, ...props }, ref) => <AccordionPrimitive.Content
  ref={ref}
  className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  {...props}
><div className={cn("pb-4 pt-0", className)}>{children}</div></AccordionPrimitive.Content>);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/dialog.tsx
var React4 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_react_icons2 = require("@radix-ui/react-icons");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React4.forwardRef(({ className, ...props }, ref) => <DialogPrimitive.Overlay
  ref={ref}
  className={cn(
    "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    className
  )}
  {...props}
/>);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React4.forwardRef(({ className, children, ...props }, ref) => <DialogPortal>
  <DialogOverlay />
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      className
    )}
    {...props}
  >
    {children}
    <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <import_react_icons2.Cross2Icon className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</DialogPortal>);
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => <div
  className={cn(
    "flex flex-col space-y-1.5 text-center sm:text-left",
    className
  )}
  {...props}
/>;
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => <div
  className={cn(
    "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
    className
  )}
  {...props}
/>;
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React4.forwardRef(({ className, ...props }, ref) => <DialogPrimitive.Title
  ref={ref}
  className={cn(
    "text-lg font-semibold leading-none tracking-tight",
    className
  )}
  {...props}
/>);
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React4.forwardRef(({ className, ...props }, ref) => <DialogPrimitive.Description
  ref={ref}
  className={cn("text-sm text-muted-foreground", className)}
  {...props}
/>);
DialogDescription.displayName = DialogPrimitive.Description.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Input,
  buttonVariants
});

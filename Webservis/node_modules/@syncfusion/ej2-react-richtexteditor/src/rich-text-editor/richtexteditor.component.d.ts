import * as React from 'react';
import { RichTextEditor, RichTextEditorModel } from '@syncfusion/ej2-richtexteditor';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface RichTextEditorTypecast {
    valueTemplate?: string | Function | any;
}
/**
 * `RichTextEditor` represents the react RichTextEditor.
 * ```tsx
 * <RichTextEditor/>
 * ```
 */
export declare class RichTextEditorComponent extends RichTextEditor {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<RichTextEditorModel & DefaultHtmlAttributes | RichTextEditorTypecast>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<RichTextEditorModel & DefaultHtmlAttributes | RichTextEditorTypecast>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    portals: any;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}

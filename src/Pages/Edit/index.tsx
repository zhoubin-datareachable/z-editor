/**
 * @file
 * @date 2021-12-03
 * @author zhoubin
 * @lastModify zhoubin 2021-12-03
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useRef, useState } from 'react';
import style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Edit = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /** iframe */
    const ref = useRef<null | HTMLIFrameElement>(null);
    /** bold  */
    const [isBold, setIsBold] = useState(false);
    /** italic */
    const [isItalic, setIsItalic] = useState(false);
    /** under line */
    const [isUnderline, setIsUnderline] = useState(false);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    useEffect(() => {
        if (ref.current) {
            const iframeWindow = ref.current.contentWindow;
            if (iframeWindow) {
                const iframeDocument = iframeWindow.document;
                iframeDocument.open();
                iframeDocument.write(
                    '<!DOCTYPE html>' +
                        '<html xmlns="http://www.w3.org/1999/xhtml">' +
                        '<head><title></title></head>' +
                        '<body style="overflow-wrap: break-word"><p>' +
                        '请输入...' +
                        '</p></body>' +
                        '</html>',
                );

                iframeDocument.close();
                iframeDocument.designMode = 'on';
            }
        }
    }, []);

    /** bold */
    const handleExecBold = () => {
        setIsBold(!isBold);
        if (ref.current) {
            const window = ref.current.contentWindow;
            if (window) {
                window.document.execCommand('bold');
            }
        }
    };

    /** Italic */
    const handleItalic = () => {
        setIsItalic(!isItalic);
        if (ref.current) {
            const window = ref.current.contentWindow;
            if (window) {
                window.document.execCommand('italic');
            }
        }
    };

    /** under line */
    const handleUnderLine = () => {
        setIsUnderline(!isUnderline);
        if (ref.current) {
            const window = ref.current.contentWindow;
            if (window) {
                window.document.execCommand('underline');
            }
        }
    };
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.editor_container}>
            <div className={style.editor_toolbar}>
                <div
                    className={style.editor_menu}
                    style={{ color: isBold ? '#1e88e5' : '' }}
                    onClick={handleExecBold}
                >
                    B
                </div>
                <div
                    className={style.editor_menu}
                    style={{ color: isItalic ? '#1e88e5' : '' }}
                    onClick={handleItalic}
                >
                    <i>I</i>
                </div>
                <div
                    className={style.editor_menu}
                    style={{ color: isUnderline ? '#1e88e5' : '' }}
                    onClick={handleUnderLine}
                >
                    <u>U</u>
                </div>
            </div>
            <iframe
                contentEditable={true}
                className={style.editor_text_container}
                ref={ref}
            ></iframe>
        </div>
    );
};
export default Edit;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

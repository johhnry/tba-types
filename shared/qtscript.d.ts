/// <reference path="./qabstractbutton.d.ts" />
/// <reference path="./qabstractitemview.d.ts" />
/// <reference path="./qbytearray.d.ts" />
/// <reference path="./qchar.d.ts" />
/// <reference path="./qcheckbox.d.ts" />
/// <reference path="./qcombobox.d.ts" />
/// <reference path="./qdialog.d.ts" />
/// <reference path="./qlayout.d.ts" />
/// <reference path="./qeventloop.d.ts" />
/// <reference path="./qframe.d.ts" />
/// <reference path="./qgroupbox.d.ts" />
/// <reference path="./qhash.d.ts" />
/// <reference path="./qhboxlayout.d.ts" />
/// <reference path="./qhttp.d.ts" />
/// <reference path="./qhttpheader.d.ts" />
/// <reference path="./qhttpmultipart.d.ts" />
/// <reference path="./qhttprequestheader.d.ts" />
/// <reference path="./qhttpresponseheader.d.ts" />
/// <reference path="./qiodevice.d.ts" />
/// <reference path="./qitemselectionmodel.d.ts" />
/// <reference path="./qlabel.d.ts" />
/// <reference path="./qlineedit.d.ts" />
/// <reference path="./qlist.d.ts" />
/// <reference path="./qmap.d.ts" />
/// <reference path="./qmetamethod.d.ts" />
/// <reference path="./qnetworkaccessmanager.d.ts" />
/// <reference path="./qnetworkreply.d.ts" />
/// <reference path="./qnetworkrequest.d.ts" />
/// <reference path="./qobject.d.ts" />
/// <reference path="./qprogressbar.d.ts" />
/// <reference path="./qpushbutton.d.ts" />
/// <reference path="./qradiobutton.d.ts" />
/// <reference path="./qstring.d.ts" />
/// <reference path="./qt.d.ts" />
/// <reference path="./qlistwidget.d.ts" />
/// <reference path="./qtablewidget.d.ts" />
/// <reference path="./qtablewidgetitem.d.ts" />
/// <reference path="./qtabwidget.d.ts" />
/// <reference path="./qtcore.d.ts" />
/// <reference path="./qtextbrowser.d.ts" />
/// <reference path="./qtextcodec.d.ts" />
/// <reference path="./qtextdocument.d.ts" />
/// <reference path="./qtextedit.d.ts" />
/// <reference path="./qtunknown.d.ts" />
/// <reference path="./qurl.d.ts" />
/// <reference path="./qvariant.d.ts" />
/// <reference path="./qwidget.d.ts" />
/// <reference path="./qpixmap.d.ts" />
/// <reference path="./qimage.d.ts" />

declare interface Function {
  /**
   * The function name.
   */
  readonly name: string;
}

declare interface Object {
  /**
   * The prototype of an object (QScriptValue::prototype()) can be accessed through its __proto__ property in script code.
   * This property has the QScriptValue::Undeletable flag set.
   */
  __proto__: object | null;

  /**
   * This function installs a getter function for a property of an object.
   * The first argument is the property name, and the second is the function to call to get the value of that property.
   * When the function is invoked, the this object will be the object whose property is accessed.
   */
  __defineGetter__(propertyName: string, getter: () => any): void;

  /**
   * This function installs a setter function for a property of an object.
   * The first argument is the property name, and the second is the function to call to set the value of that property.
   * When the function is invoked, the this object will be the object whose property is accessed.
   */
  __defineSetter__(propertyName: string, setter: (v: any) => void): void;
}

/**
 * This function invokes the garbage collector.
 */
declare function gc(): void;

interface Error {
  /** The line number where the error occurred. */
  lineNumber: number;

  /** The file name where the error occurred (if a file name was passed to QScriptEngine::evaluate()). */
  fileName: string;

  expressionBeginOffset: number;
  expressionEndOffset: number;
  sourceId: number;
}


// [AcceptVerbs("Post")]
// public void Save()
// {
//     try
//     {
//         if (HttpContext.Current.Request.Files.AllKeys.Length > 0)
//         {
//             var httpPostedFile = HttpContext.Current.Request.Files["UploadFiles"];

//             if (httpPostedFile != null)
//             {
//                 var fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
//                 var fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);
//                 if (!File.Exists(fileSavePath))
//                 {
//                     httpPostedFile.SaveAs(fileSavePath);
//                     HttpResponse Response = HttpContext.Current.Response;
//                     Response.Clear();
//                     Response.ContentType = "application/json; charset=utf-8";
//                     Response.StatusDescription = "File uploaded succesfully";
//                     Response.End();
//                 }
//                 else
//                 {
//                     HttpResponse Response = HttpContext.Current.Response;
//                     Response.Clear();
//                     Response.Status = "400 File already exists";
//                     Response.StatusCode = 400;
//                     Response.StatusDescription = "File already exists";
//                     Response.End();
//                 }
//             }
//         }
//     }
//     catch (Exception e)
//     {
//         HttpResponse Response = System.Web.HttpContext.Current.Response;
//         Response.Clear();
//         Response.ContentType = "application/json; charset=utf-8";
//         Response.StatusCode = 400;
//         Response.Status = "400 No Content";
//         Response.StatusDescription = e.Message;
//         Response.End();
//     }
// }

// import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
// import * as React from 'react';
// import * as ReactDOM from "react-dom";
// function App() {
//     const path = {
//         saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
//     };
//     return (<UploaderComponent asyncSettings={path}/>);
// }
// ReactDOM.render(<App />, document.getElementById('fileupload'));
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { DbFileNoDataWithRelations, FileSimpleModel, SearchFiles } from "../models/file-models";
import { GetListResult } from "../models";

@Injectable({
  providedIn: 'root',
})
export class FilesQueryService {

  _baseControllerUrl: string;

  constructor(
    private _httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this._baseControllerUrl = `${baseUrl}Api/Files`;
  }

  public getFilesWithRelations(model: SearchFiles): Observable<GetListResult<DbFileNoDataWithRelations>> {
    return this._httpClient.post<GetListResult<DbFileNoDataWithRelations>>(
      `${this._baseControllerUrl}/GetFiles/WithRelations`,
      model
    );
  }

  public getFiles(model: SearchFiles): Observable<GetListResult<FileSimpleModel>> {
    return this._httpClient.post<GetListResult<FileSimpleModel>>(`${this._baseControllerUrl}/GetFiles`, model);
  }
}

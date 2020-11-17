import { Component, Inject ,ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService, CRUDQuery } from '../core/http';
import { House } from './model/house'; 
import { CrudHttpGridAdapter } from '../core/crud-http-grid-adapter';
import { EditFormParam, EditServiceParam, EditParam } from '../core/common/form/';
import { Observable } from 'rxjs';
import { GridConfiguration, GridDisplayedColumns, GridComponent } from '../core/component/grid/';

@Component({
    selector: 'house-comp',
    template: `<input mat-button type="button" value="Добавить" class="btn btn-default" (click)="Add()" />
    <grid [displayedColumns] = "gridConfiguration" [crudAdapter]="crudAdapter"></grid>`,
    providers: [HttpService]
    
})
export class HouseComponent implements EditFormParam { 
    constructor(public dialog: MatDialog, private httpService: HttpService) {}
    gridConfiguration:GridConfiguration = new GridConfiguration();
    crudAdapter:CrudHttpGridAdapter;
    @ViewChild(GridComponent) child:GridComponent;

    ngOnInit(){
        this.gridConfiguration.columns.push(new GridDisplayedColumns("id","ID"));
        this.gridConfiguration.columns.push(new GridDisplayedColumns("number","Номер"));
        this.gridConfiguration.url = 'http://localhost:50019/house';
        this.crudAdapter = new CrudHttpGridAdapter(this.httpService,this.gridConfiguration.url,this);
    }
    Add() {
      let paramEdit: EditServiceParam = new EditServiceParam();
      paramEdit.url = this.gridConfiguration.url;
        const dialogRef = this.dialog.open(HouseEditForm, {
          data: paramEdit
          
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.child.AddOrUpdateItem(result);
        });
      }
      edit(param:EditParam)
      {
        console.info('edit');
        let paramEdit: EditServiceParam = new EditServiceParam();
        paramEdit.url = this.gridConfiguration.url;
        paramEdit.id = param.id;
          const dialogRef = this.dialog.open(HouseEditForm, {
            data: paramEdit   
          });
      
          dialogRef.afterClosed().subscribe(result => {
            this.child.AddOrUpdateItem(result);
          });
      }
}
@Component({
    selector: 'house-edit-form',
    templateUrl: 'house-edit-form.html',
    providers: [HttpService]
  })
  export class HouseEditForm {
    paramEdit: EditServiceParam = new EditServiceParam();
    item:House = new House();
    isEdit:boolean = false;
    constructor(private httpService: HttpService, public dialogRef: MatDialogRef<HouseEditForm>, @Inject(MAT_DIALOG_DATA) data: EditServiceParam) {
      this.paramEdit = data;
      if(data.id!=null)
      {
        this.LoadItem(data.id);
      }
    }
    LoadItem(id:number)
    {
      this.httpService.httpGet(this.paramEdit.url+'/'+id, null).subscribe((data: any) => {
        if(data != null)
        this.item=data;
        this.isEdit = true;
      });
    }
    ok()
    {
      let CRUDQueryParam:CRUDQuery = new CRUDQuery();
      CRUDQueryParam.item = this.item;
      let query : Observable<any>;
      if(this.isEdit)
        query = this.httpService.httpPut(this.paramEdit.url, CRUDQueryParam);
      else
        query = this.httpService.httpPost(this.paramEdit.url, CRUDQueryParam);
   
      query.subscribe((data: any) => {
         if(data != null)
         this.dialogRef.close(data);
    });
    
     
    }

  }
  
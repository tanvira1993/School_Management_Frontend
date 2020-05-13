const OrgIndexTemp = `
<div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                <thead>
                
                </thead>

                  <tr>
                    <th>SL No.</th>
                    <th>Action</th>
                    <th>Title</th>
                  </tr>


                <tbody>
                
                    <tr role="row" class="odd" v-for="(organizations, i) in organizations" :key="i">
                      <td>{{i+1}}</td>
                      <td>
                        <button class="btn btn-danger fa fa-trash" @click.prevent="deleteOrg(organizations.id)"></button>
                        <button class="btn btn-primary fa fa-edit" @click.prevent="showEditForm = true; clickedOrg = organizations"></button>
                      </td>
                      <td>{{organizations.title}}</td>
                    </tr>
                </tbody>
                
              </table>

              <div v-if="showEditForm">

                <div class="col-md-6">

                    <div class="box box-primary">
                
                        <div class="box-header with-border">
                            <h3 class="box-title">Organization</h3>
                        </div>
                
                        <div>
                
                            <div class="box-body">
                
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" v-model="clickedOrg.title">
                                </div>
                
                            </div>
                
                            <div class="box-footer">
                                <button class="btn btn-primary" @click.prevent="update(clickedOrg.id)">Update</button>
                            </div>
                
                        </div>
                        
                    </div>
                
                </div>
                  
              </div>

            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
`

export default OrgIndexTemp
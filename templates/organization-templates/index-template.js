const OrgIndexTemp = `
</div><div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
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
                        <router-link to="/organization" class="btn btn-danger fa fa-trash"> </router-link>
                        <router-link to="/organization" class="btn btn-primary fa fa-edit"> </router-link>
                      </td>
                      <td>{{organizations.title}}</td>
                    </tr>
                </tbody>
                
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
`

export default OrgIndexTemp
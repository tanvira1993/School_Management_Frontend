const OrgIndexTemp = `
<div>
	<section class="content-header">
	    		<h1>
	            Organizations List
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><a href="">organizations List</a></li>
	        </ol>
  </section>

  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">

            <div style="text-align: center;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createModal= true;">&nbsp Add organization</a> </div>
            


            <!-- createModal-content-start -->

			<div class="modal fade" id="modal-default-create" v-if="createModal">
				<div class="modal-dialog">
                  	<div class="modal-content">
                  
					    <div class="modal-header">
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					        <span aria-hidden="true">&times;</span></button>
					        <h4 class="modal-title"><b>Add Organization</b></h4>
                    	</div>
                    
						<div class="modal-body">
						
							<div class="form-group">
								<label class="required-field">Title &nbsp</label>
								<input  class="form-control" placeholder="Please enter organization's name" v-model="createOrganization.name">
							</div>
						
						</div>
                    
					    <div class="modal-footer">
					        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
					        <button type="button" class="btn btn-primary" @click="submitOrganization(); createModal= false;" data-dismiss="modal">Submit</button>
                    	</div>
                    
					</div>
				</div>				          
			</div>
						
			<!-- /.createModal-content-end -->





			<!-- editModal-content-start -->

		    <div class="modal fade" id="modal-default" v-if="editModal">
				<div class="modal-dialog">
					<div class="modal-content">
					    <div class="modal-header">
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span></button>
					        <h4 class="modal-title"><b></b></h4>
						</div>

						<div class="modal-body">
							<div class="form-group">
								<label class="required-field">Title &nbsp</label>
								<input  class="form-control" placeholder="Please enter book's name" v-model="clickedOrganization.name">
							</div>
						</div>

						<div class="modal-footer">
							<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary" @click="updateOrganization(); editModal= false;" data-dismiss="modal">Update</button>
						</div>
					</div>
				</div>				          
			</div>

			<!-- /.editModal-content-end -->


			<!-- deleteModal-content-start -->

			<div class="modal modal-danger fade" id="modal-danger" v-if="deleteModal">
				<div class="modal-dialog">
				    <div class="modal-content">
				        <div class="modal-header">
				            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				              <span aria-hidden="true">&times;</span></button>
				            <h4 class="modal-title"><b>{{clickedOrganization.name}} Organization will be deleted.</b></h4>
						</div>
						
				        <div class="modal-body">
				            <p><b>Are you Sure??</b></p>
						</div>
						
				        <div class="modal-footer">
				          <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
				          <button type="button" class="btn btn-outline" data-dismiss="modal" @click="deleteOrdanization()">Yes! Delete!</button>
				        </div>
				    </div>
				            
				</div>
				          
			</div>

			<!-- /.deleteModal-content-end -->













				  
				 
				 
				  <!-- /.data table -->

				  <div class="box-body table-responsive no-padding">

				  <div class="col-xs-12">
				  
		
				  <div class="box">
					<div class="box-header">
					  <h3 class="box-title">Data Table With Full Features</h3>
					</div>
					<!-- /.box-header -->
					<div class="box-body">
					  <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap"><div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
						<thead>
							<tr role="row">
								<th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style="width: 225px;">SL NO</th>
								<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 282px;">Browser</th>
								<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Platform(s)</th>
								
							</tr>

						</thead>
						<tbody>
							
		
							<tr role="row" class="odd" v-for="(organization, i) in organizations" v-bind:key="i">
								<td class="sorting_1">
									<a data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-sm alert-warning fa fa-pencil" @click="editModal = true; clickedOrganization = organization"></a>
									<a data-toggle="modal" data-target="#modal-danger"  class="btn btn-sm btn-danger fa fa-trash" @click="deleteModal = true; clickedOrganization = organization""></a>
								</td>
								<td>{{i+1}}</td>
								<td>{{organization.name}}</td>
							</tr>
						</tbody>
						
					  </table></div></div></div>
					</div>
					<!-- /.box-body -->
				  </div>
				  <!-- /.box -->
				</div>
	              </div>
				  

				



            </div>

          </div>
        </div>
      </div>
    </div>
</div>
  
`

export default OrgIndexTemp
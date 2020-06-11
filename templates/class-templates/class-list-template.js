const ClassListTemplate = `
<div>

<section class="content-header">
<h1>
	Issued Book's List
</h1>
<ol class="breadcrumb">
	<li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	<li class="active"><a href="">Issued Book's List</a></li>
</ol>
</section>
<!-- Main content -->
<section class="content">
<div class="row">
	<div class="col-xs-12">
		<div class="box" style="border-top-color: #605ca8 !important">
			<div class="box-header">

			<div style="float: right;"><a class="btn btn-info btn-sm fa fa-plus" style="background-color: #605ca8 !important" @click="createClass()""><b>&nbsp Create Class </b></a> </div>
					   
			

			<!-- editModal-content-start -->
		                    <div class="modal fade" id="modal-default" v-if="editModal">
					          <div class="modal-dialog">
					            <div class="modal-content">
					              <div class="modal-header">
					                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					                  <span aria-hidden="true">&times;</span></button>
					                <h4 class="modal-title"><b> Edit class</b></h4>
					              </div>
								  <div class="modal-body">
								  

								  	<div class="form-group">
										<label class="required-field">Name &nbsp</label>
										<input  class="form-control" placeholder="Please enter class name" v-model="clickedItem.name">
									</div>

									<div class="form-group">
										<label class="required-field">Branch &nbsp</label>
										<select class="form-control" v-model="clickedItem.branches_id">
											<option :value="null" disabled selected>Select Category</option>
											<option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
										</select>
									</div>

									<div class="form-group">
										<label class="required-field">Department &nbsp</label>
										<select class="form-control" v-model="clickedItem.departments_id">
											<option :value="null" disabled selected>Select Department</option>
											<option v-for="department in departments" v-bind:value="department.id">{{ department.name }}</option>
										</select>
									</div>
		                            
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-default pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-primary" style="background-color: #605ca8 !important" @click="updateItem(); editModal= false;" data-dismiss="modal">Update</button>
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
					                <h4 class="modal-title"><b>Selected class will be deleted.</b></h4>
					              </div>
					              <div class="modal-body">
					                <p><b>Are you Sure??</b></p>
					              </div>
					              <div class="modal-footer">
					                <button type="button" class="btn btn-sm btn-outline pull-left" data-dismiss="modal">Close</button>
					                <button type="button" class="btn btn-sm btn-outline" data-dismiss="modal" @click="deleteItem()">Yes! Delete!</button>
					              </div>
					            </div>
					            <!-- /.modal-content -->
					          </div>
					          <!-- /.modal-dialog -->
					        </div>
							<!-- /.deleteModal-content-end -->

			



				
				
			</div>
			<!-- /.box-header -->
			<div class="box-body table-responsive no-padding">
					<table id="example1" class="table table-bordered table-striped">
						<thead>
						<tr>
							<th scope="col">SL</th>
							<th scope="col">Action</th>
							<th scope="col">Name</th>
							<th scope="col">Branch</th>
							<th scope="col">Department</th>
							
						</tr>
						</thead>
						<tbody>
							<tr v-for="(cls,i) in classes" :key="i">
								<td>{{i+1}}.</td>
								<td nowarp>
		                            	<span class="badge bg-purple"><div data-toggle="modal" data-target="#modal-default" class="fa fa-edit"  @click="editModal = true; clickedItem= cls" ></div></span>
		                                <span class="badge" style="background-color: #00a7d0 !important"><div data-toggle="modal" data-target="#modal-danger" @click="deleteModal= true; clickedItem= cls"><i class="fa fa-trash" aria-hidden="true"></i></div></span>
		                            </td>
								<td>{{cls.name}}</td>
								<td>{{cls.bName}}</td>
								<td>{{cls.dName}}</td>
							</tr>
						</tbody>
					</table>
			</div>
		</div>
		<!-- /.box -->
	</div>
	<!-- /.col -->
</div>
<!-- /.row -->
</section>

</div>
`


export default ClassListTemplate
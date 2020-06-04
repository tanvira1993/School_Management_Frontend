const InventoryMaterialReceiveTemplate = `
<div>

    <section class="content-header">
        <h1>
            Material Receive
        </h1>
        <ol class="breadcrumb">
            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
            <li class="active"><a href="">Material receive history</a></li>
        </ol>
    </section>


    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">

                    <!-- createModal-content-start -->

                    <div class="modal fade" id="modal-default-create" v-if="createModal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title">Receive new material</h4>
                                </div>

                                <div class="modal-body">
                                    <div class="form-group">
                                        <label class="required-field">Material Quantity &nbsp</label>
                                        <input  class="form-control" placeholder="Please enter quantity" v-model="receiveMaterial.quantity">
                                    </div>

                                    <div class="form-group">
										<label class="required-field">Branch &nbsp</label>
										<select class="form-control" v-model="receiveMaterial.branches_id">
											<option disabled>Select Branch</option>
											<option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
										</select>
                                    </div>

                                    <div class="form-group">
										<label class="required-field">Material &nbsp</label>
										<select class="form-control" v-model="receiveMaterial.materials_id">
											<option disabled>Select material</option>
											<option v-for="material in materials" :value="material.id">{{ material.name }}</option>
										</select>
                                    </div>
                                    
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" @click="submit()" data-dismiss="modal">Submit</button>
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
                                    <h4 class="modal-title"><b>Edit received history</b></h4>
                                </div>

                                <div class="modal-body">
                                    <div class="form-group">
                                        <label class="required-field">Title &nbsp</label>
                                        <input  class="form-control" v-model= "clickedItem.quantity">
                                    </div>

                                    <div class="form-group">
										<label class="required-field">Branch &nbsp</label>
										<select class="form-control" v-model="clickedItem.branches_id">
											<option disabled>Select Branch</option>
											<option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
										</select>
                                    </div>

                                    <div class="form-group">
										<label class="required-field">Material &nbsp</label>
										<select class="form-control" v-model="clickedItem.materials_id">
											<option disabled>Select Branch</option>
											<option v-for="material in materials" :value="material.id">{{ material.name }}</option>
										</select>
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal" >Close</button>
                                    <button type="button" class="btn btn-primary" @click="updateReceive()" data-dismiss="modal">Update</button>
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
                                    <h4 class="modal-title"><b>This is received history will be deleted.</b></h4>
                                </div>

                                <div class="modal-body">
                                    <p><b>Are you Sure??</b></p>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline pull-left" data-dismiss="modal" >Close</button>
                                    <button type="button" class="btn btn-outline" data-dismiss="modal" @click="removeItem()">Yes! Delete!</button>
                                </div>
                              </div>

                        </div>

                    </div>

                    <!-- /.deleteModal-content-end -->




                

                    <div class="box-header">
                        <div style="text-align: right;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createModal= true;">&nbsp Receive new material</a> </div>
                        <h3 class="box-title">All received transection</h3>
                    </div>

                    <div class="box-body">
                        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap"><div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                            <thead>
                                <tr role="row">
                                    <th class="sorting_asc" >SL NO.</th>
                                    <th class="sorting">Action</th>
                                    <th class="sorting">Material Name</th>
                                    <th class="sorting">Branch Name</th>
                                </tr>
                            </thead>

                            <tbody>
                            
                                <tr v-for="(allReceivesMaterial,index) in allReceivesMaterials">
                                    <td>{{index+1}}</td>
                                    <td class="sorting_1">
                                        <a data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-sm alert-warning fa fa-pencil" @click="editModal=true; clickedItem = allReceivesMaterial"></a>
                                        <a data-toggle="modal" data-target="#modal-danger"  class="btn btn-sm btn-danger fa fa-trash" @click="deleteModal= true; clickedItem = allReceivesMaterial"></a>
                                    </td>
                                    <td>{{allReceivesMaterial.mName}}</td>
                                    <td>{{allReceivesMaterial.bName}}</td>
                                </tr>
                            
                            </tbody></table></div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    
</div>

`

export default InventoryMaterialReceiveTemplate
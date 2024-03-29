const DepartmentCreateTemplate = `
<div>

    <section class="content-header">
            <h1>
                Add Department
            </h1>
            <ol class="breadcrumb">
                <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
                <li class="active"><router-link to="/organization/department/list"> Department's List <router-link></li>
            </ol>
    </section>

    <section class="content">
        <div class="row">
            <!-- left column -->
            <div class="col-md-6">
                <!-- general form elements -->
                <div class="box box-primary" style="border-top-color: #605ca8 !important">
                    <div class="box-header">
                    </div>

                <form>
                    <div class="box-body">
                        <div class="form-group">
                            <label class="required-field">Name &nbsp</label>
                            <input  class="form-control" placeholder="Please enter departments's name" v-model="fromInput.name">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Branch &nbsp</label>
                            <select class="form-control" v-model="fromInput.branches_id" @change="findShift()">
                                <option :value="null" disabled selected>Select Branch</option>
                                <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="required-field">Shift &nbsp</label>
                            <select :disabled="shifts.length == 0" class="form-control" v-model="fromInput.shifts_id" >
                                <option :value="null" disabled selected>Select Shift</option>
                                <option v-for="shift in shifts" v-bind:value="shift.id">{{ shift.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="box-footer">
                        <button type="button" class="btn btn-primary btn-sm" style="background-color: #605ca8 !important" @click="createDepartment()">Submit</button>
                    </div>
                </form>
                </div>
                <!-- /.box -->
            </div>
            <!--/.col (left) -->
        </div>
        <!-- /.row -->
    </section>

</div>
`


export default DepartmentCreateTemplate
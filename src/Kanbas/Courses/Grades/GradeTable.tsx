export default function GradeTable() {
    return (
        <div id="wd-grade-table" className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col" className="align-middle">Student Name</th>
                        <th scope="col">
                            <ul className="list-unstyled text-center align-middle m-0">
                                <li >A1 SETUP</li>
                                <li className="fw-light"><small>Out of 100</small></li>
                            </ul>
                        </th>
                        <th scope="col">
                            <ul className="list-unstyled text-center align-middle m-0">
                                <li >A2 HTML</li>
                                <li className="fw-light"><small>Out of 100</small></li>
                            </ul>
                        </th>
                        <th scope="col">
                            <ul className="list-unstyled text-center align-middle m-0">
                                <li >A3 CSS</li>
                                <li className="fw-light"><small>Out of 100</small></li>
                            </ul>
                        </th>
                        <th scope="col">
                            <ul className="list-unstyled text-center align-middle m-0">
                                <li >A4 BOOTSTRAP</li>
                                <li className="fw-light"><small>Out of 100</small></li>
                            </ul>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-danger align-middle" scope="row">Jane Adams</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">96.67%</td>
                        <td className="text-center align-middle">92.18%</td>
                        <td className="text-center align-middle">66.22%</td>
                    </tr>
                    <tr>
                        <td className="text-danger align-middle" scope="row">Christina Allen</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">100%</td>
                    </tr>
                    <tr>
                        <td className="text-danger align-middle" scope="row">Samreen Ansari</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">92.18%</td>
                        <td className="text-center align-middle">66.22%</td>
                    </tr>
                    <tr>
                        <td className="text-danger align-middle" scope="row">Han Bao</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">
                            <input className="form-control text-center align-middle border-0" value={"98.34%"} />
                        </td>
                        <td className="text-center align-middle">92.18%</td>
                        <td className="text-center align-middle">100%</td>
                    </tr>
                    <tr>
                        <td className="text-danger align-middle" scope="row">Mahi Sai Srinivas Bobbili</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">96.67%</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">88.65%</td>
                    </tr>
                    <tr>
                        <td className="text-danger align-middle" scope="row">Siran Cao</td>
                        <td className="text-center align-middle">100%</td>
                        <td className="text-center align-middle">96.67%</td>
                        <td className="text-center align-middle">92.01%</td>
                        <td className="text-center align-middle">100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
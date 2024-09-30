import React from "react";
import svg from '../../images/svg/pdf.svg';
import svg1 from '../../images/svg/ai (1).svg';
import svg2 from '../../images/svg/ai (2).svg';
import folder1 from '../../images/svg/folder (1).svg';
import folder2 from '../../images/svg/folder (2).svg';
import folder3 from '../../images/svg/folder (3).svg';
import folder4 from '../../images/svg/folder (4).svg';
import folder from '../../images/svg/folder.svg';
import outBox from '../../images/svg/outbox.svg';
import pdf1 from '../../images/svg/pdf (1).svg';
import pdf2 from '../../images/svg/pdf (2).svg';
import pdfCom from '../../images/svg/pdf-com.svg';
import ps1 from '../../images/svg/ps-com (1).svg';
import ps2 from '../../images/svg/ps-com (2).svg';
import psCom from '../../images/svg/ps-com.svg';

export default function Files() {
  return (
    <>
      <div className="files-page d-flex m-20 gap-20">
        <div className="files-stats rad-10 bg-white p-20">
          <h4 className="mt-0 mb-15 txt-c-mobile">Files Statistics</h4>
          <div className="d-flex align-center p-10 mb-15 rad-6 border-ccc fs-13">
            <i className="fa-regular fa-file-pdf fa-lg icon c-red center-flex"></i>
            <div className="info">
              <span className="fw-bold">PDF Files</span>
              <span className="c-grey d-block mt-5">130</span>
            </div>
            <div className="size c-grey">7.5GB</div>
          </div>
          <div className="d-flex align-center p-10 mb-15 rad-6 border-ccc fs-13">
            <i className="fa-regular fa-file-word fa-lg c-blue center-flex icon"></i>
            <div className="info">
              <span className="fw-bold">Word Files</span>
              <span className="c-grey d-block mt-5">110</span>
            </div>
            <div className="size c-grey">1.6GB</div>
          </div>
          <div className="d-flex align-center p-10 mb-15 rad-6 border-ccc fs-13">
            <i className="fa-regular fa-file-excel fa-lg c-green center-flex icon"></i>
            <div className="info">
              <span className="fw-bold">Images Files</span>
              <span className="c-grey d-block mt-5">30</span>
            </div>
            <div className="size c-grey">3.4GB</div>
          </div>
          <div className="d-flex align-center p-10 mb-15 rad-6 border-ccc fs-13">
            <i className="fa-solid fa-file-csv fa-lg c-orange center-flex icon"></i>
            <div className="info">
              <span className="fw-bold">CSV Files</span>
              <span className="c-grey d-block mt-5">130</span>
            </div>
            <div className="size c-grey">5GB</div>
          </div>
          <a
            className="upload bg-green c-white fs-13 rad-6 d-block w-fit btn-shape"
            href="upload"
          >
            Upload
          </a>
        </div>
        <div className="files-content d-grid gap-20">
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={svg} alt="" />
            </div>
            <div className="txt-c mb-10 fs-14">My-File.pdf</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>16/4/2023</span>
              <span>20MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={svg1} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.svg</div>
            <p className="c-grey fs-13">Ahmed</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>6/4/2015</span>
              <span>22MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={svg2} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.ai</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>7/4/2005</span>
              <span>24MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={svg} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.doc</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>5/4/2009</span>
              <span>26MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={folder1} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.pdf</div>
            <p className="c-grey fs-13">Ahmed</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>3/4/2002</span>
              <span>28MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={folder2} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.ai</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>16/4/2020</span>
              <span>23MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={folder3} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.ai</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>16/4/2020</span>
              <span>25MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={folder4} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.pdf</div>
            <p className="c-grey fs-13">Ahmed</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>23/4/2021</span>
              <span>27MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={folder} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.pdf</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>21/12/2020</span>
              <span>29MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={outBox} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.svg</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>12/11/2020</span>
              <span>15MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={pdf1} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.doc</div>
            <p className="c-grey fs-13">Ahmed</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>13/10/2020</span>
              <span>65MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={pdf2} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.svg</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>11/9/2020</span>
              <span>74MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={pdfCom} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.pdf</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>18/8/2020</span>
              <span>25MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={ps1} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.pdf</div>
            <p className="c-grey fs-13">Ahmed</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>19/7/2020</span>
              <span>96MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={ps2} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.ps</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>17/6/2020</span>
              <span>10MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={psCom} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.ps</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>13/5/2020</span>
              <span>31MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={folder2} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.svg</div>
            <p className="c-grey fs-13">Ahmed</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>18/3/2020</span>
              <span>74MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={svg2} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.ai</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>17/2/2020</span>
              <span>57MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={folder1} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.svg</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>16/1/2020</span>
              <span>68MB</span>
            </div>
          </div>
          <div className="file bg-white p-10 rad-10">
            <i className="fa-solid fa-download c-grey p-absolute"></i>
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={pdfCom} alt=""/>
            </div>
            <div className="txt-c mb-10 fs-14">My-File.pdf</div>
            <p className="c-grey fs-13">Fouad</p>
            <div className="info between-flex mt-10 mb-10 p-10 fs-13 c-grey">
              <span>16/4/2020</span>
              <span>20MB</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

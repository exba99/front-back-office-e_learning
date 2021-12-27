/**
 *
 * AddCourseManagement
 *
 */
import React, { memo, useMemo, useState } from 'react';
import styled from 'styled-components/macro';
import { CustomInputText } from 'app/components/CustomInputText/Loadable';
import { CustomInputSummernote } from 'app/components/CustomInputSummernote/Loadable';
import { CustomInputSelect } from 'app/components/CustomInputSelect/Loadable';
import { PopupAddPart } from 'app/components/PopupAddPart/Loadable';
import 'antd/dist/antd.css';
import { Select, Form, Upload, message, Steps, Button } from 'antd';
import './css/style.css';
import './assetsTemplate/css/instructor-dashboard.css';
import './assetsTemplate/css/instructor-responsive.css';
import { CustomButtonValidate } from 'app/components/CustomButtonValidate/Loadable';
import { useGetAllCategoriesQuery } from 'app/services/api/CategoryManagementApi';
import { useGetAllLevelCoursesQuery } from 'app/services/api/LevelCourseApi';
import { useGetAllLanguagesQuery } from 'app/services/api/LanguageApi';
import {
  useGetAllPrerequesitesQuery,
  useAddPrerequesiteMutation,
} from 'app/services/api/PrerequesiteApi';
import {
  useGetAllGoalsQuery,
  useAddGoalMutation,
} from 'app/services/api/GoalApi';
import {
  useGetAllTargetedAudiencesQuery,
  useAddTargetedAudienceMutation,
} from 'app/services/api/TargetedAudienceApi';
import { DashboardApi } from 'app/services/api/DashboardApi';
import { useSelector } from 'react-redux';
import {
  useAddBasicInfoCourseMutation,
  useAddPartCourseMutation,
  useAddChapterMutation,
  useGetAllContentCourseQuery,
  usePublishCourseMutation,
} from 'app/services/api/CourseApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BasicInfoInterface } from 'app/services/api/CourseApi/types';
import { CustomImgDragger } from 'app/components/CustomImgDragger';
import { getBase64FromFile } from 'utils/base64';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { PopupAddChapter } from 'app/components/PopupAddChapter';

interface Props {}

interface ChapterInterface {
  chapterId: Number;
  title: string;
  videoFile: string;
}

interface PartInterface {
  partCourseId: Number;
  title: string;
  courseId: Number;
  chapters?: ChapterInterface[];
}

export const AddCourseManagement = memo((props: Props) => {
  const { Option } = Select;
  const { Dragger } = Upload;
  const { Step } = Steps;
  const [currentStep, setCurrentStep] = useState(0);
  const [description, setDescription] = useState();
  const [basicInfosCourse, setBasicInfosCourse] =
    useState<BasicInfoInterface | null>(null);
  const [isVisibleModalAddPart, setIsVisibleModalAddPart] = useState(false);
  const [isVisibleModalAddChapter, setIsVisibleModalAddChapter] =
    useState(false);
  const [clickPreviousBtn, setClickPreviousBtn] = useState(false);
  const [partCourseId, setPartCourseId] = useState(null);
  const [coursePublished, setCoursePublished] = useState(false);
  const [img, setImg] = useState<any>();
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: levelCourses } = useGetAllLevelCoursesQuery();
  const { data: languages } = useGetAllLanguagesQuery();
  const { data: curriculumCourse } = useGetAllContentCourseQuery(
    basicInfosCourse?.courseId ?? skipToken,
  );
  const { data: goals } = useGetAllGoalsQuery(
    basicInfosCourse?.courseId ?? skipToken,
  );
  const { data: prerequesites } = useGetAllPrerequesitesQuery(
    basicInfosCourse?.courseId ?? skipToken,
  );
  const { data: targetedAudiences } = useGetAllTargetedAudiencesQuery(
    basicInfosCourse?.courseId ?? skipToken,
  );

  const [addGoal] = useAddGoalMutation();
  const [publishCourse] = usePublishCourseMutation();
  const [addTargetedAudience] = useAddTargetedAudienceMutation();
  const [addPrerequesite] = useAddPrerequesiteMutation();
  const [addBasicInfoCourse] = useAddBasicInfoCourseMutation();
  const [addPartCourse] = useAddPartCourseMutation();
  const [addChapter] = useAddChapterMutation();
  const selectInfoUser = useMemo(
    () => DashboardApi.endpoints.loadInfoUser.select(),
    [],
  );
  const { data: infoUser } = useSelector(selectInfoUser);

  const setImageCallback = file => {
    if (file) {
      getBase64FromFile(file.originFileObj, base64 => setImg(base64));
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCancelModalAddPart = () => {
    setIsVisibleModalAddPart(false);
  };
  const handleShowModalAddPart = () => {
    setIsVisibleModalAddPart(true);
  };

  const handleCancelModalAddChapter = () => {
    setIsVisibleModalAddChapter(false);
  };
  const handleShowModalAddChapter = id => {
    setPartCourseId(id);
    setIsVisibleModalAddChapter(true);
  };

  const handleClickPublishCourse = () => {
    publishCourse(basicInfosCourse?.courseId || 0)
      .unwrap()
      .then(data => {
        toast.success(data?.message, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
        setCoursePublished(true);
      })
      .catch(error => {
        toast.error(error?.data?.message || error?.data?.title, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
        setCoursePublished(false);
      });
  };

  const handleSubmitChapterCallback = values => {
    const chapter = {
      PartCourseId: partCourseId,
      Title: values.Title,
    };
    let formData = new FormData();
    for (const key in chapter) {
      if (chapter.hasOwnProperty(key)) {
        formData.append(key, chapter[key]);
      }
    }
    formData.append('VideoFile', values.VideoFile);
    addChapter(formData)
      .unwrap()
      .catch(error => {
        toast.error(error?.data?.message || error?.data?.title, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleClickPreviousMoreInformation = () => {
    setClickPreviousBtn(true);
    previousStep();
  };

  const handleSubmitPartCallback = values => {
    const newPart = { ...values, CourseId: basicInfosCourse?.courseId };
    addPartCourse(newPart)
      .unwrap()
      .catch(error => {
        toast.error(error?.data?.message || error?.data?.title, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleChangeSummernoteCallback = value => {
    setDescription(value);
  };

  const onFinishBasicInfo = values => {
    if (clickPreviousBtn) {
      nextStep();
    } else {
      const newValues = {
        ...values,
        IdOwnerOfCourse: infoUser.idUser,
        Image: img,
        Description: description,
      };
      addBasicInfoCourse(newValues)
        .unwrap()
        .then((data: BasicInfoInterface) => {
          setBasicInfosCourse(data);
          nextStep();
        })
        .catch(error => {
          toast.error(error?.data?.message || error?.data?.title, {
            theme: 'colored',
            toastId: '1',
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    }
  };

  const onFinishPrerequesite = values => {
    console.log(values);
    const prerequesite = { ...values, CourseId: basicInfosCourse?.courseId };
    addPrerequesite(prerequesite)
      .unwrap()
      .catch(error => {
        toast.error(error?.data?.message || error?.data?.title, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const onFinishGoal = values => {
    const goal = { ...values, CourseId: basicInfosCourse?.courseId };
    addGoal(goal)
      .unwrap()
      .catch(error => {
        toast.error(error?.data?.message || error?.data?.title, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const onFinishTargeted = values => {
    const targets = { ...values, CourseId: basicInfosCourse?.courseId };
    addTargetedAudience(targets)
      .unwrap()
      .catch(error => {
        toast.error(error?.data?.message || error?.data?.title, {
          theme: 'colored',
          toastId: '1',
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const onFinishContentCourse = () => {};

  const steps = [
    {
      title: 'Basic',
      content: (
        <Form
          layout="vertical"
          onFinish={onFinishBasicInfo}
          autoComplete="on"
          style={{ marginBottom: '100px' }}
        >
          <div className="form-group smalls">
            <CustomInputText
              nameInput="Title"
              label="Titre du cours"
              required={true}
              errorMessage="Ce champ est obligatoire"
              placeholder="titre du cours"
              initialValue={basicInfosCourse?.label}
            />
          </div>

          <div className="form-group smalls">
            <CustomInputSummernote
              label="Description"
              data={description || ''}
              placeholder="votre description"
              handleChange={handleChangeSummernoteCallback}
              initialValue={basicInfosCourse?.description}
            />
          </div>

          <div className="form-group smalls">
            <CustomInputSelect
              nameInput="CategoryId"
              label="Choisir le catégorie"
              required={true}
              errorMessage="Ce champ est obligatoire"
              placeholder="selectionnez une catégorie"
              initialValue={basicInfosCourse?.categoryId}
            >
              {categories! &&
                categories!.map((value, k) => (
                  <>
                    <Option value={value.categoryId} key={k}>
                      {value.label}
                    </Option>
                  </>
                ))}
            </CustomInputSelect>
          </div>

          <div className="form-group smalls">
            <CustomInputSelect
              nameInput="LevelId"
              label="Choisir le niveau de cours"
              required={true}
              errorMessage="Ce champ est obligatoire"
              placeholder="selectionnez un niveau de cours"
              initialValue={basicInfosCourse?.levelCourseId}
            >
              {levelCourses! &&
                levelCourses!.map((value, k) => (
                  <>
                    <Option value={value.levelCourseId} key={k}>
                      {value.label}
                    </Option>
                  </>
                ))}
            </CustomInputSelect>
          </div>

          <div className="form-group smalls">
            <CustomInputSelect
              nameInput="LanguageId"
              label="Choisir la langue du cours"
              required={true}
              errorMessage="Ce champ est obligatoire"
              placeholder="selectionnez une langue"
              initialValue={basicInfosCourse?.languageId}
            >
              {languages! &&
                languages!.map((value, k) => (
                  <>
                    <Option value={value.languageId} key={k}>
                      {value.label}
                    </Option>
                  </>
                ))}
            </CustomInputSelect>
          </div>
          <div className="form-group smalls">
            <CustomImgDragger
              label="Choisir l'image du cours: "
              setImageCallback={setImageCallback}
              accept=".jpeg, .png, .gif"
              initialImage={
                basicInfosCourse
                  ? [
                      {
                        uid: '-1',
                        name: 'image-cours.jpeg',
                        status: 'done',
                        url: basicInfosCourse?.image,
                      },
                    ]
                  : []
              }
            />
          </div>
          <div className="d-flex justify-content-end">
            <CustomButtonValidate text="Suivant" fullWidth={false} />
          </div>
        </Form>
      ),
    },
    {
      title: 'Infos Supplementaires',
      content: (
        <>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="dashboard_wrap">
                <div className="form_blocs_wrap">
                  <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                      <div
                        className="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          className="nav-link active"
                          id="v-pills-requirements-tab"
                          data-toggle="pill"
                          data-target="#v-pills-requirements"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-requirements"
                          aria-selected="false"
                        >
                          Prérequis
                        </button>
                        <button
                          className="nav-link"
                          id="v-pills-goal-tab"
                          data-toggle="pill"
                          data-target="#v-pills-goal"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-goal"
                          aria-selected="true"
                        >
                          But du cours
                        </button>
                        <button
                          className="nav-link"
                          id="v-pills-target-tab"
                          data-toggle="pill"
                          data-target="#v-pills-target"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-target"
                          aria-selected="false"
                        >
                          Public visé
                        </button>
                      </div>
                    </div>

                    <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                      <div className="tab-content" id="v-pills-tabContent">
                        {/*  <!-- requirements --> */}
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-requirements"
                          role="tabpanel"
                          aria-labelledby="v-pills-requirements-tab"
                        >
                          <Form
                            layout="vertical"
                            onFinish={onFinishPrerequesite}
                            autoComplete="on"
                          >
                            <div className="form-group smalls">
                              <label>prérequis: </label>
                              <div className="row w-100 m-0">
                                <div className="col-9 col-sm-9 px-0">
                                  <Form.Item name="Label" className="m-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="prérequis..."
                                    />
                                  </Form.Item>
                                </div>
                                <div className="col-3 col-sm-3">
                                  <button
                                    className="btn theme-bg"
                                    type="submit"
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>

                          <div className="form-group smalls">
                            <ul className="lists-4">
                              {prerequesites &&
                                prerequesites.length > 0 &&
                                prerequesites.map((pr, key) => (
                                  <li key={key}>{pr.label}</li>
                                ))}
                            </ul>
                          </div>
                        </div>

                        {/* Goal */}
                        <div
                          className="tab-pane fade"
                          id="v-pills-goal"
                          role="tabpanel"
                          aria-labelledby="v-pills-goal-tab"
                        >
                          <Form
                            layout="vertical"
                            onFinish={onFinishGoal}
                            autoComplete="on"
                          >
                            <div className="form-group smalls">
                              <label>Ce que vous apprendrez: </label>
                              <div className="row w-100 m-0">
                                <div className="col-9 col-sm-9 px-0">
                                  <Form.Item name="Label" className="m-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="but..."
                                    />
                                  </Form.Item>
                                </div>
                                <div className="col-3 col-sm-3">
                                  <button
                                    className="btn theme-bg"
                                    type="submit"
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>

                          <div className="form-group smalls">
                            <ul className="lists-4">
                              {goals &&
                                goals.length > 0 &&
                                goals.map((g, key) => (
                                  <li key={key}>{g.label}</li>
                                ))}
                            </ul>
                          </div>
                        </div>
                        {/* Targeted Audiance */}
                        <div
                          className="tab-pane fade"
                          id="v-pills-target"
                          role="tabpanel"
                          aria-labelledby="v-pills-target-tab"
                        >
                          <Form
                            layout="vertical"
                            onFinish={onFinishTargeted}
                            autoComplete="on"
                          >
                            <div className="form-group smalls">
                              <label>À qui s'adresse ce cours: </label>
                              <div className="row w-100 m-0">
                                <div className="col-9 col-sm-9 px-0">
                                  <Form.Item name="Label" className="m-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="publi visé..."
                                    />
                                  </Form.Item>
                                </div>
                                <div className="col-3 col-sm-3">
                                  <button
                                    className="btn theme-bg"
                                    type="submit"
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>

                          <div className="form-group smalls">
                            <ul className="lists-4">
                              {targetedAudiences &&
                                targetedAudiences.length > 0 &&
                                targetedAudiences.map((t, key) => (
                                  <li key={key}>{t.label}</li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <CustomButtonValidate
              text="Précédent"
              onClick={handleClickPreviousMoreInformation}
              fullWidth={false}
            />
            <CustomButtonValidate
              onClick={nextStep}
              text="Suivant"
              fullWidth={false}
            />
          </div>
        </>
      ),
    },
    {
      title: 'Curriculum',
      content: (
        <>
          <div className="curriculum-section">
            <div className="row">
              <div className="col-md-12">
                <div className="curriculum-add-item">
                  <h4 className="section-title mt-0">
                    <i className="fas fa-th-list mr-2"></i>
                    Curriculum
                  </h4>
                  <button
                    className="main-btn color btn-hover ml-left add-section-title"
                    onClick={handleShowModalAddPart}
                  >
                    Nouvelle partie
                  </button>
                </div>
                {curriculumCourse?.partCourses &&
                  curriculumCourse?.partCourses?.$values.length > 0 &&
                  curriculumCourse?.partCourses?.$values.map((part, k) => (
                    <div key={k} className="added-section-item mb-30">
                      <div className="section-header">
                        <h4>
                          <i className="fas fa-bars mr-2"></i>
                          {part?.title}
                        </h4>
                        <div className="section-edit-options">
                          <button className="btn-152" type="button">
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                      <div className="section-group-list sortable">
                        {part?.chapters?.$values.length > 0 &&
                          part?.chapters?.$values.map((chapter, key) => (
                            <div key={key} className="section-list-item">
                              <div className="section-item-title">
                                <i
                                  className="fa fa-file-video-o"
                                  aria-hidden="true"
                                ></i>
                                <span className="section-item-title-text">
                                  {chapter?.title}
                                </span>
                              </div>
                              <button
                                type="button"
                                className="section-item-tools ml-auto"
                              >
                                <i className="fas fa-bars"></i>
                              </button>
                            </div>
                          ))}
                      </div>
                      <div className="section-add-item-wrap p-3">
                        <button
                          className="add_lecture"
                          onClick={() =>
                            handleShowModalAddChapter(part?.partCourseId)
                          }
                        >
                          <i className="far fa-plus-square mr-2"></i>
                          Chapitre
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <CustomButtonValidate
              text="Précédent"
              onClick={previousStep}
              fullWidth={false}
            />
            <CustomButtonValidate
              onClick={nextStep}
              text="Suivant"
              fullWidth={false}
            />
          </div>
        </>
      ),
    },
    {
      title: 'Finish',
      content: (
        <>
          <div className="succ_wrap">
            <div className="succ_121">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="succ_122">
              <h4>Votre cours a bien été ajouté</h4>
              <p>
                Le status actuel de votre cours est à Enregistrer, il ne sera
                visible que par vous. Cliquer sur Publier pour le rendre visible
              </p>
            </div>
            <div className="succ_123 mt-2">
              <a href="course-detail.html" className="btn theme-bg text-white">
                Voir le cours
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <CustomButtonValidate
              text="Précédent"
              onClick={previousStep}
              fullWidth={false}
            />
            <CustomButtonValidate
              text="Publier"
              isValid={!coursePublished}
              onClick={handleClickPublishCourse}
              fullWidth={false}
            />
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <ToastContainer />
      {/* Popup add new part */}
      <PopupAddPart
        isVisibleModal={isVisibleModalAddPart}
        handleCancelModal={handleCancelModalAddPart}
        handleSubmit={handleSubmitPartCallback}
      />

      {/* Popup add new chapter */}
      <PopupAddChapter
        isVisibleModal={isVisibleModalAddChapter}
        handleCancelModal={handleCancelModalAddChapter}
        handleSubmit={handleSubmitChapterCallback}
      />

      <div className="row justify-content-between">
        <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
          <div className="dashboard_wrap d-flex align-items-center justify-content-between">
            <div className="arion">
              <nav className="transparent">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add New Course
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="dashboard_wrap">
            <div className="form_blocs_wrap">
              <div style={{ margin: '10px 20px 40px 20px' }}>
                <Steps current={currentStep} style={{ margin: '40px 0' }}>
                  {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
                <div>
                  <div className="tab-content" id="v-pills-tabContent">
                    {steps[currentStep].content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

const Div = styled.div``;

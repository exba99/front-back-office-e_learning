/**
 *
 * PreviewCourse
 *
 */
import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { useGetCourseByIdQuery } from 'app/services/api/CourseApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { ReadMoreText } from 'app/components/ReadMoreText';
import history from 'utils/history';

interface Props {}

interface LocationHistory {
  idCourse: Number;
}

export const PreviewCourse = memo((props: Props) => {
  const location = useLocation<LocationHistory>();

  const { data: course } = useGetCourseByIdQuery(
    (location.state && location.state.idCourse) ?? skipToken,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  return (
    <section className="gray p-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 order-lg-first">
            {/* <!-- Overview --> */}
            <div className="edu_wraper">
              <div className="ed_header_caption">
                <h2 className="ed_title">{course?.label}</h2>
              </div>
              <p style={{ fontFamily: 'Jost' }}>
                <ReadMoreText>{course?.description || ''}</ReadMoreText>
              </p>
            </div>
            {course?.prerequisites?.$values.length > 0 && (
              <div className="edu_wraper">
                <h4 className="edu_title">Prérequis</h4>
                <ul className="lists-2">
                  {course?.prerequisites?.$values.map((pr, key) => (
                    <li key={key}>{pr.label}</li>
                  ))}
                </ul>
              </div>
            )}
            {course?.partCourses?.$values.length > 0 && (
              <div className="edu_wraper">
                <h4 className="edu_title">Course Circullum</h4>
                <div
                  id="accordionExample"
                  className="accordion shadow circullum"
                >
                  {course?.partCourses?.$values.map((part, key) => (
                    <div className="card" key={key}>
                      <div
                        id={`heading${part.partCourseId}`}
                        className="card-header bg-white shadow-sm border-0"
                      >
                        <h6 className="mb-0 accordion_title">
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target={`#collapse${part.partCourseId}`}
                            aria-expanded="true"
                            aria-controls={`collapse${part.partCourseId}`}
                            className="d-block position-relative text-dark collapsible-link py-2"
                          >
                            {part.title}
                          </a>
                        </h6>
                      </div>
                      <div
                        id={`collapse${part.partCourseId}`}
                        aria-labelledby={`heading${part.partCourseId}`}
                        data-parent="#accordionExample"
                        className="collapse show"
                      >
                        <div className="card-body pl-3 pr-3">
                          <ul className="lectures_lists">
                            {part?.chapters?.$values.length > 0 &&
                              part?.chapters?.$values.map((chapter, key) => (
                                <li className="complete">
                                  <div className="lectures_lists_title">
                                    <i className="fas fa-check dios"></i>
                                  </div>
                                  {chapter?.title}
                                  <span className="cls_timing">40:20</span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {course?.audiencesTargeted?.$values.length > 0 && (
              <div className="edu_wraper">
                <h4 className="edu_title">À qui s'adresse ce cours: </h4>
                <ul className="lists-4">
                  {course?.audiencesTargeted?.$values.map((tr, key) => (
                    <li key={key}>{tr.label}</li>
                  ))}
                </ul>
              </div>
            )}
            {course?.purposes?.$values.length > 0 && (
              <div className="edu_wraper">
                <h4 className="edu_title">
                  Ce que vous apprendrez de ce cours:{' '}
                </h4>
                <ul className="lists-3">
                  {course?.purposes?.$values.map((p, key) => (
                    <li key={key}>{p.label}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* <!-- Sidebar --> */}
          <div className="col-lg-4 col-md-12 order-lg-last">
            <div className="ed_view_box style_2 stick_top">
              <div className="ed_view_features">
                <div className="eld mb-3">
                  <h5 className="font-medium">Ce cours inclus</h5>
                </div>
                <div className="eld mb-3">
                  <ul className="edu_list right">
                    <li>
                      <i className="ti-tag"></i>Language:
                      <strong>{course?.language?.label}</strong>
                    </li>
                    <li>
                      <i className="ti-tag"></i>Categorie:
                      <strong>{course?.category?.label}</strong>
                    </li>
                    <li>
                      <i className="ti-tag"></i>Niveau de cours:
                      <strong>{course?.levelCourse?.label}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Airman from './icons/Airman';
import SeniorAirman from './icons/SeniorAirman';
import TechnicalSergeant from './icons/TechnicalSergeant';
import MasterSergeant from './icons/MasterSergeant';
import SeniorMasterSergeant from './icons/SeniorMasterSergeant';
import Lieutenant from './icons/Lieutenant';
import Captain from './icons/Captain';
import Major from './icons/Major';
import Colonel from './icons/Colonel';
import General from './icons/General';


class AchievementIcon extends Component {
  static Level = {
    AIRMAN: 'AIRMAN',
    SENIOR_AIRMAN: 'SENIOR_AIRMAN',
    TECHNICAL_SERGEANT: 'TECHNICAL_SERGEANT',
    MASTER_SERGEANT: 'MASTER_SERGEANT',
    SENIOR_MASTER_SERGEANT: 'SENIOR_MASTER_SERGEANT',
    LIEUTENANT: 'LIEUTENANT',
    CAPTAIN: 'CAPTAIN',
    MAJOR: 'MAJOR',
    COLONEL: 'COLONEL',
    GENERAL: 'GENERAL',
  };

  static mapLevelToElement = (level = AchievementIcon.Level.AIRMAN) => {
    switch (level) {
      case AchievementIcon.Level.AIRMAN:
        return Airman;

      case AchievementIcon.Level.SENIOR_AIRMAN:
        return SeniorAirman;

      case AchievementIcon.Level.TECHNICAL_SERGEANT:
        return TechnicalSergeant;

      case AchievementIcon.Level.MASTER_SERGEANT:
        return MasterSergeant;

      case AchievementIcon.Level.SENIOR_MASTER_SERGEANT:
        return SeniorMasterSergeant;

      case AchievementIcon.Level.LIEUTENANT:
        return Lieutenant;

      case AchievementIcon.Level.CAPTAIN:
        return Captain;

      case AchievementIcon.Level.MAJOR:
        return Major;

      case AchievementIcon.Level.COLONEL:
        return Colonel;

      case AchievementIcon.Level.GENERAL:
        return General;

      default:
        return Airman;
    }
  };

  static propTypes = {
    fill: PropTypes.string,
    level: PropTypes.oneOf(Object.values(AchievementIcon.Level)).isRequired,
  };

  render() {
    const Icon = AchievementIcon.mapLevelToElement(this.props.level);
    return <Icon fill={this.props.fill} />;
  }
}

export default AchievementIcon;

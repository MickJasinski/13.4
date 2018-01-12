function timeFormat(uptime) {

  if (uptime < 60) {
    return 'Uptime: ' + uptime + 'sec';
  } else if (uptime >= 60 && uptime < 3600) {
    return 'Uptime: ' + Math.floor(uptime / 60) + 'min ' + Math.floor(uptime % 60) + 'sec';
  } else {
    return 'Uptime: ' + Math.floor(uptime / 3600) + 'h ' + Math.floor(uptime % 3600 / 60) + 'min ' + Math.floor(uptime % 60) + 'sec';
  }
}

exports.timeFormat = timeFormat;
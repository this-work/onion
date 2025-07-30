import { colorModeArgumentType } from "../../../../.storybook/arguments/globalTypes";
import CModal from "./C-Modal.vue";
const meta = {
  title: "Komponenten/Modal",
  component: CModal,
  argTypes: {
    colorMode: colorModeArgumentType
  },
  args: {
    colorMode: "light",
    rootElement: "body",
    show: true,
    fullwidth: false,
    content: "Modal content goes here"
  }
};
export default meta;
export const Default = {
  args: {}
};
export const Dark = {
  args: {
    colorMode: "dark"
  }
};
export const Fullwidth = {
  args: {
    fullwidth: true
  }
};
export const LangerInhalt = {
  args: {
    content: `<p>
  Amet gravida lobortis condimentum bibendum elit tortor? Primis tincidunt arcu
  ac lobortis fames himenaeos. Adipiscing imperdiet pharetra hendrerit molestie
  sociosqu. Blandit lacinia risus dis per penatibus pulvinar nisl porta sem
  rhoncus. Est erat morbi consequat. Mauris dolor non molestie eget lectus nunc.
  Laoreet penatibus fusce ante. Id posuere vehicula vulputate scelerisque
  mattis. Tempor convallis curae; molestie pulvinar gravida, nostra proin dui
  parturient curabitur quam sociis. Tristique senectus curabitur varius fusce
  eros amet risus fermentum iaculis dictum. Lectus egestas, condimentum
  malesuada massa condimentum sagittis taciti varius.
</p>
<p>
  Tellus nullam quam velit ligula fermentum dictumst. Semper morbi luctus nunc
  nunc blandit suscipit. Hendrerit sociosqu at interdum ad? Libero turpis
  facilisis nisi habitasse penatibus. Odio conubia donec facilisi. Consectetur
  montes convallis taciti felis elementum inceptos semper dictum mollis metus
  mattis facilisi. Iaculis tincidunt vehicula pretium rutrum mus condimentum
  morbi platea tortor platea. Quam imperdiet ultricies duis dapibus? Imperdiet
  ultricies sapien penatibus condimentum suscipit, montes id lectus duis ut
  litora. Netus congue aenean ultrices faucibus quisque suspendisse suspendisse.
  Platea praesent porttitor elit sociosqu. Vitae per suspendisse vulputate cum?
  Scelerisque sociis.
</p>
<p>
  Sit dolor posuere bibendum gravida aliquet posuere quisque nisi eget mauris
  venenatis. Consequat sit penatibus class fermentum tortor vestibulum. Congue
  curae; justo fermentum odio dui malesuada fringilla per. Dignissim magna est
  curae; nibh tempus amet leo suspendisse sagittis fringilla praesent. Fusce
  eget luctus malesuada dolor inceptos urna sit vivamus sed elit litora. Felis
  adipiscing quis mollis turpis sem condimentum varius aenean sociosqu. Arcu
  vulputate.
</p>
<p>
  Cras massa taciti rutrum! Iaculis habitasse magna hac sociis aliquam mattis
  nascetur sit iaculis montes fusce! Nostra per platea mus est mus metus.
  Pharetra congue sed phasellus, magna pretium nostra rutrum blandit. Ligula
  ipsum nisi pharetra mattis class lacus quam. Nostra habitasse magnis ligula
  magna mus bibendum posuere platea dictumst magna. Morbi primis egestas
  malesuada placerat amet vel odio phasellus primis curae; mus. Purus sem at
  magnis. Eleifend, montes commodo convallis nisi non fames iaculis commodo.
  Sagittis est consequat, metus lacinia. Id pretium sem.
</p>
<p>
  Dui sodales semper curae; integer. Potenti pulvinar rutrum pulvinar enim
  habitasse class tristique vel sociosqu etiam! Conubia elementum scelerisque
  cursus et quisque montes quis. Tortor, penatibus viverra dis. Justo donec
  lacinia aptent. Curabitur fermentum cras torquent lobortis lobortis. Rhoncus
  volutpat velit facilisis per neque rutrum magnis primis ultrices sociis
  sagittis class. Sed maecenas natoque eros praesent tortor magnis. Nostra ipsum
  ridiculus neque facilisi ornare, commodo luctus cubilia tempor.
</p>
<p>
  Metus magna fringilla mi consequat commodo potenti fusce feugiat mauris nunc
  mollis purus. Conubia accumsan fames ante neque non id vehicula. Ornare neque,
  ad venenatis penatibus. Metus fringilla, imperdiet natoque aliquam in lacinia.
  Sagittis neque facilisis sociis euismod fusce auctor orci integer. Consectetur
  erat sociosqu bibendum tortor turpis cursus diam morbi eros inceptos. Turpis
  dapibus eget pharetra class!
</p>
<p>
  Vel malesuada curae; scelerisque suspendisse. Lectus ligula posuere, ultrices
  commodo in consequat a. Inceptos malesuada commodo penatibus hendrerit
  ridiculus consectetur. Vestibulum gravida condimentum proin purus ad. Mollis
  lectus eget molestie arcu cubilia. Facilisi diam venenatis fames cras posuere
  ligula rhoncus. Fusce justo mi erat et cras ante. Suspendisse auctor fames
  aliquet in dictum nibh faucibus ligula. Felis venenatis.
</p>
<p>
  Porta in ante velit erat pretium porttitor arcu hendrerit at. Eget fames risus
  hendrerit taciti non? Condimentum tincidunt dignissim euismod. Proin vitae
  turpis volutpat id id feugiat laoreet. Pulvinar torquent luctus non dapibus
  tellus tempus, hendrerit erat hac. Donec augue arcu metus condimentum
  condimentum dignissim fermentum ultrices. Ridiculus sollicitudin luctus magna
  elit habitant vulputate potenti aptent. Cubilia at himenaeos varius metus
  justo aliquam dictum lorem a etiam nulla. Ultrices gravida curae; volutpat
  quis ipsum augue natoque duis. Erat parturient nullam dignissim donec,
  fermentum sed tempus venenatis nisl sagittis suspendisse diam.
</p>
<p>
  Elementum accumsan nisi lacinia tristique augue lectus habitasse laoreet
  nullam etiam quam eros! Mi proin curabitur ridiculus imperdiet. In massa
  adipiscing vulputate vulputate imperdiet. Dignissim at consectetur nostra
  consequat suscipit condimentum. Neque lobortis dis eu natoque imperdiet ante
  cursus proin magna integer tempor. Ut fusce hendrerit, venenatis ut. Rutrum,
  natoque leo libero diam sociosqu. Montes ultrices placerat sodales metus.
  Etiam platea orci nibh ante eleifend. Dis turpis interdum scelerisque? Elit
  nam placerat odio hac massa praesent dictum per, vulputate varius orci!
  Consequat habitasse hac nisl nullam nec vel!
</p>
<p>
  Dui potenti tristique sem cum aliquam turpis massa mi auctor placerat
  praesent. Mi ultrices amet vel mollis convallis blandit arcu fringilla per.
  Facilisi ultrices condimentum curabitur cursus non natoque bibendum ad
  facilisis. Ad fermentum interdum dictumst donec pretium ridiculus nostra mi.
  Nibh per auctor accumsan bibendum semper sociis! Inceptos a cubilia arcu nisi
  odio eleifend aenean volutpat, praesent hendrerit. Eleifend consectetur
  magnis.
</p>
<p>
  Quis metus ultricies nibh dolor dictumst tellus cras gravida magna gravida
  netus eget. Fringilla nibh proin enim fermentum, adipiscing cum mollis dolor.
  Taciti dis mollis sociis dui aptent hendrerit etiam nostra tempor mollis
  gravida congue. Aliquam inceptos nibh dignissim vestibulum gravida suspendisse
  per tortor cursus eu curae; conubia? Id odio dignissim porttitor eget
  fermentum dis! Euismod est fames laoreet nec. Molestie dolor, dolor euismod!
  Erat tristique elit adipiscing ultrices nascetur vitae sed? Sagittis ipsum a
  massa vestibulum litora, integer duis fusce elementum. Dolor!
</p>
<p>
  Scelerisque suspendisse phasellus primis, gravida curae; imperdiet iaculis
  aliquet ornare. Nec dignissim phasellus integer nisi senectus cras ut vitae
  elementum venenatis interdum. Magnis viverra fringilla conubia eleifend tellus
  tempus eleifend eleifend ipsum. Aliquet aliquet tristique eu non facilisi,
  ligula natoque. Torquent porta auctor scelerisque faucibus pulvinar orci
  condimentum etiam odio! Sed nec lacinia consectetur in interdum odio in id.
  Inceptos nibh sociis penatibus auctor quam urna a massa quam. Nibh consequat
  nec fringilla euismod mattis hac porttitor! Commodo ut leo sed, enim metus.
  Dis tellus curae; commodo tristique interdum erat enim. Inceptos primis
  lacinia!
</p>
<p>
  Hac adipiscing ullamcorper fermentum porttitor viverra donec ligula turpis nam
  nulla. Scelerisque sit hac laoreet hac taciti egestas. Euismod euismod platea,
  taciti non imperdiet at praesent. Tempor varius malesuada ut dis nostra
  egestas habitant elit! Rutrum condimentum pretium netus primis ornare fusce
  urna iaculis et nisl phasellus tortor. Ultricies posuere, enim vehicula
  convallis tellus. Quisque bibendum mi at euismod lobortis egestas fusce. A
  massa tincidunt semper vulputate! Odio inceptos dapibus condimentum.
</p>
<p>
  Etiam in hac varius, mollis augue auctor nostra fringilla taciti curabitur
  arcu. Dictumst aenean mus tristique habitant cursus aliquam. Platea class
  felis sem massa conubia inceptos mi tortor, convallis convallis. Metus nullam
  pellentesque volutpat eu tincidunt magnis ullamcorper dictum. Himenaeos
  lacinia nostra dapibus morbi sed. Tempus est aliquam integer vitae sed non
  felis. Ultrices inceptos hendrerit mollis litora eu eu eget convallis
  ridiculus. Id dictumst dignissim turpis. Vel curae; consectetur, eu mattis
  hendrerit rhoncus! Aliquam morbi, mauris litora imperdiet faucibus scelerisque
  vehicula hac ad dui. Luctus, accumsan sed.
</p>
<p>
  Lacus pharetra accumsan, est elit malesuada phasellus hendrerit congue magna.
  Nunc elementum lobortis ullamcorper aliquet mattis consequat malesuada donec.
  Magnis aliquet augue auctor egestas urna magna sit; nec ullamcorper erat
  platea. Morbi hac eros aliquet, neque senectus facilisis scelerisque vitae
  tortor turpis mattis. Cursus class vestibulum nostra. Taciti facilisis, nam
  senectus morbi amet platea ultrices montes phasellus?
</p>
<p>
  Dolor malesuada nec justo at sodales dictumst venenatis lobortis magna blandit
  adipiscing. Cras a conubia ut condimentum ridiculus. Primis vitae laoreet
  inceptos vulputate pulvinar penatibus pharetra leo magnis neque tincidunt
  purus. Inceptos eget pretium malesuada a pharetra? Erat aenean porta ut litora
  dolor augue sagittis primis nec. Lobortis, viverra nisl cum amet felis magna
  vivamus faucibus penatibus sagittis potenti. Quis mollis ut lobortis pulvinar.
  Blandit elit ultricies quisque class mauris magna cras sapien inceptos duis.
  Sagittis libero viverra eleifend etiam rutrum!
</p>
<p>
  Fames blandit facilisis purus himenaeos cubilia proin dolor. Sollicitudin arcu
  nec, tempor lectus tempus blandit tempor senectus dignissim potenti hac
  suscipit! Nam sem praesent neque, habitant pretium. Nullam class quisque elit
  lacus molestie sodales euismod adipiscing. Ullamcorper urna nibh, enim netus
  sociosqu vitae quam ullamcorper sociis duis. Maecenas, cursus tellus
  pellentesque senectus! Nulla nam mauris augue euismod dapibus dis. Per per
  auctor dictumst praesent! Conubia vehicula habitant tortor vitae cubilia
  congue orci nostra maecenas non varius curae;. Felis tellus tellus lobortis
  lorem ullamcorper. Dictumst eget ligula proin sit nisl accumsan.
</p>
<p>
  Nostra varius aenean accumsan pulvinar. Interdum dis habitasse adipiscing nunc
  sapien sed. Curae; turpis non ipsum. Consequat ad interdum ligula habitant
  placerat. Felis maecenas ullamcorper neque morbi pellentesque habitasse? Nam
  imperdiet est consequat fringilla dictumst donec nostra. Nec mattis libero est
  cras, id venenatis. Sollicitudin feugiat dictumst volutpat eu. Morbi consequat
  neque lacus rhoncus.
</p>
<p>
  Montes fames ornare sit lorem torquent erat rhoncus consequat urna sociosqu
  blandit. Risus pellentesque litora turpis id eleifend suspendisse. Id feugiat
  augue euismod per cum sociosqu laoreet molestie. Convallis magnis natoque
  tortor sollicitudin ante scelerisque nec tempus himenaeos dictumst. In
  convallis potenti pharetra pulvinar torquent, fames gravida. Potenti ultrices
  tortor purus tellus nisi vulputate nam bibendum per vehicula ultrices
  pellentesque. Congue posuere rhoncus lectus consectetur donec! Consequat netus
  nullam, cursus odio imperdiet lacus etiam facilisis suscipit nascetur. Vitae?
</p>
<p>
  Sociosqu fusce torquent nulla dolor natoque pellentesque. Sollicitudin ut,
  conubia odio gravida vel arcu. Nisi placerat dolor rutrum ut dui metus
  imperdiet dignissim. Dapibus viverra conubia cursus. Imperdiet dictumst
  curabitur massa parturient. Consequat dictum magna mi nisi? Purus rutrum at
  facilisi! Congue at dui mollis. Auctor maecenas mollis platea lacus egestas
  justo quisque.
</p>
<p>
  Accumsan tincidunt est nostra aliquet adipiscing lectus sollicitudin
  condimentum tortor curabitur pulvinar tempus. Vehicula primis tortor leo
  curabitur scelerisque turpis non pellentesque quisque. Fringilla platea
  viverra ultricies? Porta suspendisse sociosqu adipiscing ullamcorper; dolor
  magna eget himenaeos. Dictumst, eget pharetra pretium blandit volutpat. Donec
  diam adipiscing orci orci magnis odio congue cursus dapibus? Magna feugiat
  magnis diam donec quam eu congue purus purus feugiat bibendum. Turpis aliquam
  inceptos ante molestie est ligula. Vestibulum inceptos elementum nunc suscipit
  semper tincidunt! Morbi.
</p>
<p>
  Leo rhoncus nisl amet risus placerat mollis sociosqu class sodales facilisi.
  Lacinia fringilla lobortis nec. Varius sagittis vulputate rutrum vehicula
  pharetra potenti leo elementum amet. Integer nascetur pulvinar fames sem
  faucibus vitae nam justo, in luctus. Suspendisse vivamus mi vulputate sed
  venenatis ligula egestas velit turpis dis. Et facilisis mauris, habitasse
  facilisis montes cubilia magna malesuada porttitor. Mus nascetur turpis dui
  lorem donec. In dictum ante nulla magna magna. Amet penatibus, dis dapibus
  fringilla tempor. Nisi lectus porta condimentum cubilia rhoncus tortor
  condimentum rutrum dis. Nisi lectus maecenas leo mus velit!
</p>
<p>
  Eros euismod hac ipsum mollis dui amet luctus ornare. Varius primis magna
  vestibulum! Nisi purus nisi duis viverra hendrerit potenti sed eros. Montes
  ridiculus sapien platea lorem. Nostra penatibus litora erat elit consectetur
  nibh eget lacus per; habitant ligula. Tortor arcu interdum posuere orci magnis
  nam interdum. Magna aptent ultricies.
</p>
<p>
  Morbi mi fusce molestie habitant nunc? Aenean penatibus suspendisse sapien vel
  a enim commodo feugiat dui, dignissim phasellus tempus. Semper nostra cursus,
  natoque imperdiet. Quisque dis lectus mattis malesuada inceptos, tellus
  vulputate at sem rutrum vehicula vivamus. Iaculis bibendum aenean faucibus
  lectus augue nulla. Platea, morbi nibh hendrerit rutrum? Nam penatibus ipsum
  justo mauris facilisi! Posuere eget fames conubia nulla iaculis erat habitant.
  Mattis commodo mollis sociosqu natoque netus mattis. Conubia rutrum vel
  sodales, pulvinar fermentum nisi scelerisque lorem penatibus vehicula.
</p>
<p>
  Vitae nam nascetur hendrerit vitae mi amet, primis erat penatibus orci eu
  quam. Viverra nostra duis, nostra ipsum facilisi tincidunt parturient. Quis
  montes quisque tincidunt, egestas tempus elementum purus! Justo laoreet
  eleifend tempor aliquet fermentum justo himenaeos senectus nunc! Mi morbi,
  rhoncus est facilisis justo. Hac hendrerit nunc metus diam enim fames orci
  aptent condimentum. Condimentum tempus rhoncus commodo dictum proin diam
  imperdiet nec.
</p>
<p>
  Cursus hac nibh tempus risus eleifend hac proin nisl. Diam aptent orci lectus
  volutpat torquent ac porta himenaeos. Rutrum penatibus malesuada feugiat ante
  phasellus platea tincidunt vulputate dapibus fames aliquam. Habitasse neque
  quisque nam scelerisque potenti. Nostra aptent torquent nec ultrices sodales
  luctus nullam ligula suspendisse torquent amet dui. Proin dignissim nisl
  facilisi odio ultrices ullamcorper elementum ut duis blandit id est. Interdum
  justo himenaeos enim habitasse mi. Integer magna purus morbi sed quisque
  volutpat faucibus at! Sollicitudin ac sagittis nec malesuada, suspendisse
  auctor sagittis?
</p>`
  }
};
export const HTMLInhalt = {
  args: {
    content: "<h3>HTML Content</h3><p>This is a paragraph with <strong>bold</strong> text.</p>"
  }
};
